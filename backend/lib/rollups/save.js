const { supabase } = require('../connections/supabase')
const { alchemy } = require('../connections/alchemy')
const { ThirdwebSDK } = require('@thirdweb-dev/sdk/evm');
const crypto = require('crypto');

const saveToChain = async (rollup) => {
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.SIGNER_PRIVATE_KEY, 'mumbai');
  const contract = await sdk.getContract('0xbA4800E9e89e9019b1cFAD552422EC75fAF3E1C5');
  try {
    await contract.call('addRollup', [rollup])
  } catch (e) {
    console.warn('failed to save rollup to mumbai', e)
  }
}

const saveToSupabase = async (rollup) => {
  const { error } = await supabase
    .from('rollups')
    .insert(rollup)
    .select();

  if (error) {
    if (error.code === '23505') {
      console.info('Rollup duplicate detected')
      return false
    }
    console.error('Rollup is sad. It was not saved :( ', rollup, error)
    return false
  }
  return true
}

module.exports = async (rollup) => {
  if (!rollup) return

  const network = await alchemy.core.getNetwork()
  const contracts = JSON.stringify(rollup.created)
  const contractsHash = crypto.createHash('sha256').update(contracts).digest('hex')
  const rollupData = {
    admin: rollup.admin,
    proposer: rollup.proposer,
    batcher: rollup.batcher,
    sequencer: rollup.sequencer,
    l1_start_time: rollup.blockTimestamp,
    l1_chain_name: network.name,
    contracts,
    block_hash: rollup.blockHash,
    contracts_hash: contractsHash
  }
  const savedToSupabase = await saveToSupabase(rollupData)
  if (savedToSupabase) {
    await saveToChain({
      contractsHash,
      contracts,
      blockHash: rollup.blockHash,
      l1StartTime: rollup.blockTimestamp,
      l1ChainName: network.name,
      detectedAt: new Date().getTime(),
      admin: rollup.admin,
      proposer: rollup.proposer,
      batcher: rollup.batcher,
      sequencer: rollup.sequencer
    })
  }
}
