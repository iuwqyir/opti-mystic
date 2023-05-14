# opti-mystic

## Project Description

This hackthon project started as an attempt to create a cross rollup explorer, but due to technical limitations, the idea moved 
to creating a discovery service for new optimistic rollups. the discovery service searches continuosly to detect the deployment of new rollups.

The discory service helps builders discover rollups and give them ready made config to run the nodes behind those rollups. 
Basicly it enable users to discover a rollup and run it in 4 easy steps the UI propose.

## How it's Made
The discovery logic to detect the deployments of the contracts is responsible for detecting rollups once they are created. 
In addition the service, finds the addresses of the rollups config and present it to in an intuitive UI.

The discovery service also pushes the discovered rollups to the following contract in polygon: [0xbA4800E9e89e9019b1cFAD552422EC75fAF3E1C5](https://mumbai.polygonscan.com/address/0xbA4800E9e89e9019b1cFAD552422EC75fAF3E1C5)

And the UI of the service can be access here: https://opti-mystic.vercel.app/

The stack we used is:
* Frontend: Next.js
* Backend: Nodejs server
* Node: we used the OP stack tools
* Smart contract: Solidity

This is an overview of the project structure:
![sdfd drawio (1)](https://github.com/iuwqyir/opti-mystic/assets/9674012/1a4ace87-60b3-4df8-8f2b-a4c88b3d9ad4)



