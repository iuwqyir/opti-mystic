# opti-mystic

## Project Description

This hackthon project started as an attempt to create a cross rollup explorer, but due to technical limitations, the idea moved 
to creating a discovery service for new optimistic rollups. the discovery service searches continuosly to detect the deployment of new rollups.

The discory service helps builders discover rollups and give them ready made config to run the nodes behind those rollups. 
Basicly it enable users to discover a rollup and run it in 4 easy steps the UI propose.

## How it's Made

The solution has three components:
### The discovery service
this service runs the discovery logic to detect the deployment of the contracts responsible for a rollup once they get created. 
In addition the service, finds the addresses of the admin/batcher/Sequesnder... 

The discovery service also pushes the discovered rollups to the following contract in polygon: [0xbA4800E9e89e9019b1cFAD552422EC75fAF3E1C5](https://mumbai.polygonscan.com/address/0xbA4800E9e89e9019b1cFAD552422EC75fAF3E1C5)

And the UI of the service can be access here: https://opti-mystic.vercel.app/

The stack we used is:
* Frontend: Next.js
* Backend: Nodejs server
* Node: we used the OP stack tools
* Smart contract: Solidity
