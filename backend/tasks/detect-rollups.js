const detectRollups = require('../lib/rollups/detect')
const enrichConfig = require('../lib/rollups/enrichConfig')
const saveRollup = require('../lib/rollups/save')

exports.handler = async () => {
  let rollups = await detectRollups();
  for (const rollup of rollups) {
    await enrichConfig(rollup);
  }
  await Promise.all(rollups.map(rollup => saveRollup(rollup)))
};
