const { supabase } = require('../connections/supabase')
const { alchemy } = require('../connections/alchemy')
const crypto = require('crypto');

module.exports = async (rollup) => {
  if (!rollup) return

  const network = await alchemy.core.getNetwork()
  const contracts = JSON.stringify(rollup.created)
  const rollupData = {
    admin: rollup.admin,
    proposer: rollup.proposer,
    batcher: rollup.batcher,
    sequencer: rollup.sequencer,
    l1_start_time: rollup.blockTimestamp,
    l1_chain_name: network.name,
    contracts,
    block_hash: rollup.blockHash,
    contracts_hash: crypto.createHash('sha256').update(contracts).digest('hex')
  }
  const { error } = await supabase
    .from('rollups')
    .insert(rollupData)
    .select();

  if (error) {
    if (error.code === '23505') {
      console.info('Rollup duplicate detected')
      return
    }
    console.error('Rollup is sad. It was not saved :( ', rollup, error)
  }
}
