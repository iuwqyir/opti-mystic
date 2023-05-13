const { Alchemy, Network } = require('alchemy-sdk');

const settings = {
  apiKey: process.env.PROVIDER_API_KEY,
  network: Network.ETH_GOERLI
};

const alchemy = new Alchemy(settings);

module.exports = { alchemy }
