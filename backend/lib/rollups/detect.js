const { alchemy } = require('../connections/alchemy')
const enrichConfig = require('./enrichConfig')
const save = require('./save')

const NUM_OF_DEPLOYMENTS_FOR_ROLLUP = process.env.NUM_OF_DEPLOYMENTS_FOR_ROLLUP || 19
const BLOCK_OFFSET = process.env.BLOCK_OFFSET || 60

const DEPLOYMENTS = {}

const getBlockRange = async () => {
  const lastBlock = await alchemy.core.getBlockNumber()
  return { startBlock: lastBlock - BLOCK_OFFSET, endBlock: lastBlock }
}

const serialize = async (rollup) => {
  if (!rollup) return
  const admin = rollup?.[0]?.from
  const minBlockNumber = Math.min(...rollup.map(tx => tx.blockNumber))
  const oldestBlock = await alchemy.core.getBlock(minBlockNumber);
  const createdContractAddresses = rollup?.map(tx => tx.creates)
  return {
    admin,
    created: createdContractAddresses,
    blockTimestamp: oldestBlock.timestamp,
    blockHash: oldestBlock.hash
  }
}

module.exports = async () => {
  const { startBlock, endBlock } = await getBlockRange()
  console.log(`** detecting rollups on blocks from ${startBlock} to ${endBlock} **`)
  for (let blockIdx = startBlock; blockIdx <= endBlock; blockIdx++) {
    console.log(`** Checking block number ${blockIdx} **`)
    const block = await alchemy.core.getBlockWithTransactions(blockIdx)
    for (const tx of (block?.transactions || [])) {
      if (tx.creates) {
        const existingDeployments = DEPLOYMENTS[tx.from] || []
        DEPLOYMENTS[tx.from] = [...existingDeployments, tx]
        const possibleRollup = DEPLOYMENTS[tx.from]
        if (possibleRollup.length === NUM_OF_DEPLOYMENTS_FOR_ROLLUP) {
          try {
            const serialized = await serialize(possibleRollup)
            const rollup = await enrichConfig(serialized)
            await save(rollup)
          } catch (e) {
            console.warn(e.message)
          }
          delete DEPLOYMENTS[tx.from]
        }
      }
    }
  }
};
