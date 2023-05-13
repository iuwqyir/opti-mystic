const { alchemy } = require('../connections/alchemy')

const NUM_OF_DEPLOYMENTS_FOR_ROLLUP = process.env.NUM_OF_DEPLOYMENTS_FOR_ROLLUP || 19
const BLOCK_OFFSET = process.env.BLOCK_OFFSET || 60

const getBlockRange = async () => {
  const lastBlock = await alchemy.core.getBlockNumber()
  return { startBlock: lastBlock - BLOCK_OFFSET, endBlock: lastBlock }
}

const findRollups = (deploymentsFrom) => {
  const rollups = []
  Object.keys(deploymentsFrom).forEach(deployer => {
    if (deploymentsFrom[deployer].length === NUM_OF_DEPLOYMENTS_FOR_ROLLUP) {
      rollups.push(deploymentsFrom[deployer])
    }
  })
  return rollups
}

const serialize = (rollups) => {
  if (!rollups?.length) return []
  return rollups.map(rollup => {
    const admin = rollup?.[0]?.from
    const createdContractAddresses = rollup?.map(tx => tx.creates)
    return {
      admin,
      created: createdContractAddresses
    }
  })
}

module.exports = async () => {
  const { startBlock, endBlock } = await getBlockRange()
  const deploymentsFrom = {}
  const blackList = []
  for (let blockIdx = startBlock; blockIdx <= endBlock; blockIdx++) {
    const block = await alchemy.core.getBlockWithTransactions(blockIdx)
    block?.transactions?.forEach(tx => {
      if (tx.creates) {
        const existingDeployments = deploymentsFrom[tx.from] || []
        if (existingDeployments.length > 19) {
          blackList.push(tx.from)
          delete deploymentsFrom[tx.from]
        } else {
          if (blackList.includes(tx.from)) return
          deploymentsFrom[tx.from] = [...existingDeployments, tx]
        }
      }
    })
  }
  const rollups = findRollups(deploymentsFrom)
  return serialize(rollups)
};