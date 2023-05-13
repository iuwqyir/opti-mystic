const ethers = require("ethers")

function getBatcherAbis() {
  return [
    {
      "inputs": [{"internalType": "address", "name": "_owner", "type": "address"}, {
        "internalType": "uint256",
        "name": "_overhead",
        "type": "uint256"
      }, {"internalType": "uint256", "name": "_scalar", "type": "uint256"}, {
        "internalType": "bytes32",
        "name": "_batcherHash",
        "type": "bytes32"
      }, {"internalType": "uint64", "name": "_gasLimit", "type": "uint64"}, {
        "internalType": "address",
        "name": "_unsafeBlockSigner",
        "type": "address"
      }, {
        "components": [{
          "internalType": "uint32",
          "name": "maxResourceLimit",
          "type": "uint32"
        }, {"internalType": "uint8", "name": "elasticityMultiplier", "type": "uint8"}, {
          "internalType": "uint8",
          "name": "baseFeeMaxChangeDenominator",
          "type": "uint8"
        }, {"internalType": "uint32", "name": "minimumBaseFee", "type": "uint32"}, {
          "internalType": "uint32",
          "name": "systemTxMaxGas",
          "type": "uint32"
        }, {"internalType": "uint128", "name": "maximumBaseFee", "type": "uint128"}],
        "internalType": "struct ResourceMetering.ResourceConfig",
        "name": "_config",
        "type": "tuple"
      }], "stateMutability": "nonpayable", "type": "constructor"
    }, {
      "anonymous": false,
      "inputs": [{"indexed": true, "internalType": "uint256", "name": "version", "type": "uint256"}, {
        "indexed": true,
        "internalType": "enum SystemConfig.UpdateType",
        "name": "updateType",
        "type": "uint8"
      }, {"indexed": false, "internalType": "bytes", "name": "data", "type": "bytes"}],
      "name": "ConfigUpdate",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{"indexed": false, "internalType": "uint8", "name": "version", "type": "uint8"}],
      "name": "Initialized",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
      "name": "OwnershipTransferred",
      "type": "event"
    }, {
      "inputs": [],
      "name": "UNSAFE_BLOCK_SIGNER_SLOT",
      "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "VERSION",
      "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "batcherHash",
      "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "gasLimit",
      "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{"internalType": "address", "name": "_owner", "type": "address"}, {
        "internalType": "uint256",
        "name": "_overhead",
        "type": "uint256"
      }, {"internalType": "uint256", "name": "_scalar", "type": "uint256"}, {
        "internalType": "bytes32",
        "name": "_batcherHash",
        "type": "bytes32"
      }, {"internalType": "uint64", "name": "_gasLimit", "type": "uint64"}, {
        "internalType": "address",
        "name": "_unsafeBlockSigner",
        "type": "address"
      }, {
        "components": [{
          "internalType": "uint32",
          "name": "maxResourceLimit",
          "type": "uint32"
        }, {"internalType": "uint8", "name": "elasticityMultiplier", "type": "uint8"}, {
          "internalType": "uint8",
          "name": "baseFeeMaxChangeDenominator",
          "type": "uint8"
        }, {"internalType": "uint32", "name": "minimumBaseFee", "type": "uint32"}, {
          "internalType": "uint32",
          "name": "systemTxMaxGas",
          "type": "uint32"
        }, {"internalType": "uint128", "name": "maximumBaseFee", "type": "uint128"}],
        "internalType": "struct ResourceMetering.ResourceConfig",
        "name": "_config",
        "type": "tuple"
      }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
      "inputs": [],
      "name": "minimumGasLimit",
      "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "overhead",
      "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "owner",
      "outputs": [{"internalType": "address", "name": "", "type": "address"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [],
      "name": "resourceConfig",
      "outputs": [{
        "components": [{
          "internalType": "uint32",
          "name": "maxResourceLimit",
          "type": "uint32"
        }, {"internalType": "uint8", "name": "elasticityMultiplier", "type": "uint8"}, {
          "internalType": "uint8",
          "name": "baseFeeMaxChangeDenominator",
          "type": "uint8"
        }, {"internalType": "uint32", "name": "minimumBaseFee", "type": "uint32"}, {
          "internalType": "uint32",
          "name": "systemTxMaxGas",
          "type": "uint32"
        }, {"internalType": "uint128", "name": "maximumBaseFee", "type": "uint128"}],
        "internalType": "struct ResourceMetering.ResourceConfig",
        "name": "",
        "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "scalar",
      "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{"internalType": "bytes32", "name": "_batcherHash", "type": "bytes32"}],
      "name": "setBatcherHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{"internalType": "uint256", "name": "_overhead", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_scalar",
        "type": "uint256"
      }], "name": "setGasConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
      "inputs": [{"internalType": "uint64", "name": "_gasLimit", "type": "uint64"}],
      "name": "setGasLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "components": [{
          "internalType": "uint32",
          "name": "maxResourceLimit",
          "type": "uint32"
        }, {"internalType": "uint8", "name": "elasticityMultiplier", "type": "uint8"}, {
          "internalType": "uint8",
          "name": "baseFeeMaxChangeDenominator",
          "type": "uint8"
        }, {"internalType": "uint32", "name": "minimumBaseFee", "type": "uint32"}, {
          "internalType": "uint32",
          "name": "systemTxMaxGas",
          "type": "uint32"
        }, {"internalType": "uint128", "name": "maximumBaseFee", "type": "uint128"}],
        "internalType": "struct ResourceMetering.ResourceConfig",
        "name": "_config",
        "type": "tuple"
      }], "name": "setResourceConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
      "inputs": [{"internalType": "address", "name": "_unsafeBlockSigner", "type": "address"}],
      "name": "setUnsafeBlockSigner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [],
      "name": "unsafeBlockSigner",
      "outputs": [{"internalType": "address", "name": "", "type": "address"}],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "version",
      "outputs": [{"internalType": "string", "name": "", "type": "string"}],
      "stateMutability": "view",
      "type": "function"
    }]
}
function getProposerAbis() {
  return [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_submissionInterval",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_l2BlockTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_startingBlockNumber",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_startingTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_proposer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_challenger",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_finalizationPeriodSeconds",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "outputRoot",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "l2OutputIndex",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "l2BlockNumber",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "l1Timestamp",
          "type": "uint256"
        }
      ],
      "name": "OutputProposed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "prevNextOutputIndex",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "newNextOutputIndex",
          "type": "uint256"
        }
      ],
      "name": "OutputsDeleted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "CHALLENGER",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "FINALIZATION_PERIOD_SECONDS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "L2_BLOCK_TIME",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PROPOSER",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "SUBMISSION_INTERVAL",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_l2BlockNumber",
          "type": "uint256"
        }
      ],
      "name": "computeL2Timestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_l2OutputIndex",
          "type": "uint256"
        }
      ],
      "name": "deleteL2Outputs",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_l2OutputIndex",
          "type": "uint256"
        }
      ],
      "name": "getL2Output",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "outputRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint128",
              "name": "timestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "l2BlockNumber",
              "type": "uint128"
            }
          ],
          "internalType": "struct Types.OutputProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_l2BlockNumber",
          "type": "uint256"
        }
      ],
      "name": "getL2OutputAfter",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "outputRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint128",
              "name": "timestamp",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "l2BlockNumber",
              "type": "uint128"
            }
          ],
          "internalType": "struct Types.OutputProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_l2BlockNumber",
          "type": "uint256"
        }
      ],
      "name": "getL2OutputIndexAfter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_startingBlockNumber",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_startingTimestamp",
          "type": "uint256"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestBlockNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestOutputIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextBlockNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextOutputIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_outputRoot",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_l2BlockNumber",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_l1BlockHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_l1BlockNumber",
          "type": "uint256"
        }
      ],
      "name": "proposeL2Output",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startingBlockNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startingTimestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}

const parseConfigFromAddresses = async (addresses) => {
  let proposer;
  let batcher;
  let sequencer;
  let provider = new ethers.providers.AlchemyProvider("goerli", process.env.PROVIDER_API_KEY);

  for (const address of addresses) {
    try {
      let contract = new ethers.Contract(address, getBatcherAbis(), provider);
      batcher = await contract.batcherHash()
      console.log("🍾 We fount the batcher!!!", address, batcher)
    } catch (e) {}
    try {
      let contract = new ethers.Contract(address, getProposerAbis(), provider);
      proposer = await contract.PROPOSER()
      console.log("🍾 We fount the proposer!!!", address, proposer)
    } catch (e) {}
    try {
      let contract = new ethers.Contract(address, getBatcherAbis(), provider);
      sequencer = await contract.unsafeBlockSigner()
      console.log("🍾 We fount the sequencer!!!", address, sequencer)
    } catch (e) {}
  }

  return {
    batcher,
    proposer,
    sequencer
  }
}

function parseByte32(bytes32String) {
  return `0x${BigInt(bytes32String).toString(16)}`
}

module.exports = async (rollup) => {
  let config = await parseConfigFromAddresses(rollup.created);
  rollup.batcher = parseByte32(config.batcher)
  rollup.proposer = parseByte32(config.proposer)
  rollup.sequencer = config.sequencer;

  return rollup
};
