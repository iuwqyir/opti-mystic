const { supabase } = require('../connections/supabase')
const crypto = require('crypto');

module.exports = async (rollup) => {
  if (!rollup) return

  const contracts = JSON.stringify(rollup.created)
  const rollupData = {
    admin: rollup.admin,
    proposer: rollup.proposer,
    batcher: rollup.batcher,
    sequencer: rollup.sequencer,
    l1_start_time: rollup.blockTimestamp,
    l1_chain_name: 'görli', // TODO
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
