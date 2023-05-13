const { supabase } = require('../connections/supabase')

module.exports = async (rollup) => {
  if (!rollup) return

  const rollupData = {
    admin: rollup.admin,
    proposer: rollup.proposer,
    batcher: rollup.batcher,
    sequencer: rollup.sequencer,
    l1_start_time: rollup.blockTimestamp,
    l1_chain_name: 'görli', // TODO
    contracts: JSON.stringify(rollup.created),
    block_hash: rollup.blockHash
  }
  const { error } = await supabase
    .from('rollups')
    .insert(rollupData)
    .select();

  if (error) {
    console.error('Rollup is sad. It was not saved :( ', rollup, error)
  }
}
