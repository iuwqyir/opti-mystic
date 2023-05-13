const detectRollups = require('../lib/rollups/detect')

exports.handler = async () => {
  await detectRollups()
};
