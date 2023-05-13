import React from "react";
import styles from "@/styles/Home.module.css";
import {Alert, Box, Button, Divider, Grid, ListItemText} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const RollupDialog = (prop) => {

    const setEnvs = () => {
        return `export SEQ_ADDR=${prop?.rollup?.sequencer}
export L1_RPC=https://eth-goerli.g.alchemy.com/v2/hWefenUDVd3MGsZmTHqsCpXVksyWIr7T
export RPC_KIND=alchemy`
    }
    const runOpGeth = () => {
        return `./build/bin/geth \\
        --datadir ./datadir \\
        --http \\
        --http.corsdomain="*" \\
        --http.vhosts="*" \\
        --http.addr=0.0.0.0 \\
        --http.api=web3,debug,eth,txpool,net,engine \\
        --ws \\
        --ws.addr=0.0.0.0 \\
        --ws.port=8546 \\
        --ws.origins="*" \\
        --ws.api=debug,eth,txpool,net,engine \\
        --syncmode=full \\
        --gcmode=archive \\
        --nodiscover \\
        --maxpeers=0 \\
        --networkid=42069 \\
        --authrpc.vhosts="*" \\
        --authrpc.addr=0.0.0.0 \\
        --authrpc.port=8551 \\
        --authrpc.jwtsecret=./jwt.txt \\
        --rollup.disabletxpoolgossip=true \\
        --password=./datadir/password \\
        --allow-insecure-unlock \\
        --mine \\
        --miner.etherbase=$SEQ_ADDR`
    }
    const runOpNode = () => {
        return `./bin/op-node \\
        --l2=http://localhost:8551 \\
        --l2.jwt-secret=./jwt.txt \\
        --sequencer.enabled \\
        --sequencer.l1-confs=3 \\
        --verifier.l1-confs=3 \\
        --rollup.config=./rollup.json \\
        --rpc.addr=0.0.0.0 \\
        --rpc.port=8547 \\
        --p2p.disable \\
        --rpc.enable-admin \\
        --l1=$L1_RPC \\
        --l1.rpckind=$RPC_KIND`
    }
    const gettingStarted = () => {
        return `{
    "numDeployConfirmations": 1,

    "finalSystemOwner": ${prop?.rollup?.admin},
    "portalGuardian": ${prop?.rollup?.admin},
    "controller": ${prop?.rollup?.admin},

    "l1StartingBlockTag": ${prop?.rollup?.blockHash},

    "l1ChainID": 5,
    "l2ChainID": 42069,
    "l2BlockTime": 2,

    "maxSequencerDrift": 600,
    "sequencerWindowSize": 3600,
    "channelTimeout": 300,

    "p2pSequencerAddress": ${prop?.rollup?.sequencer},
    "batchInboxAddress": "0xff00000000000000000000000000000000042069",
    "batchSenderAddress": ${prop?.rollup?.batcher},

    "l2OutputOracleSubmissionInterval": 120,
    "l2OutputOracleStartingBlockNumber": 0,
    "l2OutputOracleStartingTimestamp": ${prop?.rollup?.timestamp},

    "l2OutputOracleProposer": ${prop?.rollup?.proposer},
    "l2OutputOracleChallenger": ${prop?.rollup?.admin},

    "finalizationPeriodSeconds": 12,

    "proxyAdminOwner": ${prop?.rollup?.admin},
    "baseFeeVaultRecipient": ${prop?.rollup?.admin},
    "l1FeeVaultRecipient": ${prop?.rollup?.admin},
    "sequencerFeeVaultRecipient": ${prop?.rollup?.admin},

    "gasPriceOracleOverhead": 2100,
    "gasPriceOracleScalar": 1000000,

    "governanceTokenSymbol": "OP",
    "governanceTokenName": "Optimism",
    "governanceTokenOwner": ${prop?.rollup?.admin},

    "l2GenesisBlockGasLimit": "0x1c9c380",
    "l2GenesisBlockBaseFeePerGas": "0x3b9aca00",
    "l2GenesisRegolithTimeOffset": "0x0",

    "eip1559Denominator": 50,
    "eip1559Elasticity": 10
}`

    }

    return (
        <section className={styles.header}>

            <Grid container spacing={2} sx={{ pl: "25%", pr: "25%", pt: 3, flexDirection: 'column', gap: '2rem'}}>
                <Grid container >
                    <Grid item xs={6}>
                        <ListItemText primary="Admin" secondary={prop?.rollup?.admin}/>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText primary="Batcher" secondary={prop?.rollup?.batcher}/>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText primary="Proposer" secondary={prop?.rollup?.proposer}/>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText primary="Sequencer" secondary={prop?.rollup?.sequencer}/>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText primary="Block Hash" secondary={prop?.rollup?.block_hash?.substring(0,40) + '...' + prop?.rollup?.block_hash?.substring(60,prop?.rollup?.block_hash?.lenght)}/>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText primary="Timestamp" secondary={prop?.rollup?.l1_start_time}/>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Grid>
                <Grid justifyContent="center" sx={{ pb: '10px' }}>
                    <h2>Steps To Run Locally</h2>
                    <p>Running the code below will help running locally the rollup</p>
                </Grid>
                <Grid justifyContent="center">
                    <Alert severity="warning">
                        If you never ran before a rollup locally please first go through getting started in optimism <b><a href="https://stack.optimism.io/docs/build/getting-started/">here</a></b>
                    </Alert>
                </Grid>

                <Grid>
                    <b>Step 1:</b> Go to optimism/packages/contracts-bedrock/deploy-config/getting-started.json and update the json with the data below
                </Grid>
                <Grid>
                    <Box component="div"
                        sx={{
                            p: 1,
                            backgroundColor: 'black',
                            border: '2px solid #191919',
                            borderRadius: 2,
                            fontSize: '0.8rem',
                            fontWeight: '600'
                        }}>
                        <Grid sx={{textAlign: 'right'}}>
                            <Button onClick={() => navigator.clipboard.writeText(gettingStarted())}><ContentCopyIcon/></Button>
                        </Grid>
                        <pre>{gettingStarted()}</pre>
                    </Box>
                </Grid>

                <Grid>
                    <b>Step 2:</b> export the following variables
                </Grid>
                <Grid>
                    <Box component="div"
                         sx={{
                             p: 1,
                             backgroundColor: 'black',
                             border: '2px solid #191919',
                             borderRadius: 2,
                             fontSize: '0.8rem',
                             fontWeight: '600'
                         }}>
                        <Grid sx={{textAlign: 'right'}}>
                            <Button onClick={() => navigator.clipboard.writeText(setEnvs())}><ContentCopyIcon/></Button>
                        </Grid>
                        <pre>{setEnvs()}</pre>
                    </Box>
                </Grid>


                <Grid>
                    <b>Step 3:</b> Start op-geth from optimism/op-geth
                </Grid>
                <Grid>
                    <Box component="div"
                         sx={{
                             p: 1,
                             backgroundColor: 'black',
                             border: '2px solid #191919',
                             borderRadius: 2,
                             fontSize: '0.8rem',
                             fontWeight: '600'
                         }}>
                        <Grid sx={{textAlign: 'right'}}>
                            <Button onClick={() => navigator.clipboard.writeText(runOpGeth())}><ContentCopyIcon/></Button>
                        </Grid>
                        <pre>{runOpGeth()}</pre>
                    </Box>
                </Grid>

                <Grid>
                    <b>Step 4:</b> Start op-node from optimism/op-node
                </Grid>
                <Grid>
                    <Box component="div"
                         sx={{
                             p: 1,
                             backgroundColor: 'black',
                             border: '2px solid #191919',
                             borderRadius: 2,
                             fontSize: '0.8rem',
                             fontWeight: '600'
                         }}>
                        <Grid sx={{textAlign: 'right'}}>
                            <Button onClick={() => navigator.clipboard.writeText(runOpNode())}><ContentCopyIcon/></Button>
                        </Grid>
                        <pre>{runOpNode()}</pre>
                    </Box>
                </Grid>
            </Grid>
        </section>
    );
};

export { RollupDialog };
