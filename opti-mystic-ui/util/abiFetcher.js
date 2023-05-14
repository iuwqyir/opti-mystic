export function getRegistryAbi() {
    return [
        {
            "type": "function",
            "name": "addRollup",
            "inputs": [
                {
                    "type": "tuple",
                    "name": "_rollup",
                    "components": [
                        {
                            "type": "string",
                            "name": "contractsHash",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "contracts",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "blockHash",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256",
                            "name": "l1StartTime",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "l1ChainName",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256",
                            "name": "detectedAt",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "admin",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "proposer",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "batcher",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "sequencer",
                            "internalType": "address"
                        }
                    ],
                    "internalType": "struct OptimismRollupDirectory.Rollup"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getRollup",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_index",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple",
                    "name": "",
                    "components": [
                        {
                            "type": "string",
                            "name": "contractsHash",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "contracts",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "blockHash",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256",
                            "name": "l1StartTime",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "l1ChainName",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256",
                            "name": "detectedAt",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "admin",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "proposer",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "batcher",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "sequencer",
                            "internalType": "address"
                        }
                    ],
                    "internalType": "struct OptimismRollupDirectory.Rollup"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRollupCount",
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRollups",
            "inputs": [],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "string",
                            "name": "contractsHash",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "contracts",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "blockHash",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256",
                            "name": "l1StartTime",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "l1ChainName",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256",
                            "name": "detectedAt",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "admin",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "proposer",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "batcher",
                            "internalType": "address"
                        },
                        {
                            "type": "address",
                            "name": "sequencer",
                            "internalType": "address"
                        }
                    ],
                    "internalType": "struct OptimismRollupDirectory.Rollup[]"
                }
            ],
            "stateMutability": "view"
        }
    ]
}