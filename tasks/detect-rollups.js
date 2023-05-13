const { alchemy } = require('../lib/connections/alchemy')
const fs = require('fs')

const NUM_OF_DEPLOYMENTS_FOR_ROLLUP = 19

const getBlockRange = async () => {
  const lastBlock = await alchemy.core.getBlockNumber()
  return { startBlock: lastBlock - 60, endBlock: lastBlock }
}

exports.handler = async () => {
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
  const rollups = []
  Object.keys(deploymentsFrom).forEach(deployer => {
    if (deploymentsFrom[deployer].length === NUM_OF_DEPLOYMENTS_FOR_ROLLUP) {
      rollups.push(deploymentsFrom[deployer])
    }
  })
  console.log(rollups)
  console.log('Found', rollups.length, 'rollups')
  // fs.writeFileSync('rollups.json', JSON.stringify(rollups, null, 2))
};
