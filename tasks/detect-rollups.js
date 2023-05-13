const detectRollups = require('../lib/rollups/detect')
const enrichConfig = require('../lib/rollups/enrichConfig')

exports.handler = async () => {
  let rollups = await detectRollups();
  for (const rollup of rollups) {
    await enrichConfig(rollup);
  }
  console.log(rollups)
};
