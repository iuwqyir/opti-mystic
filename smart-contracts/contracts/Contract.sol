// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract OptimismRollupDirectory {
    struct Rollup {
        string contractsHash;
        string contracts;
        string blockHash;
        uint256 l1StartTime;
        string l1ChainName;
        uint256 detectedAt;
        address admin;
        address proposer;
        address batcher;
        address sequencer;
    }

    Rollup[] private rollups;


    function addRollup(Rollup memory _rollup) public {
        rollups.push(_rollup);
    }

    function getRollup(uint256 _index) public view returns (Rollup memory) {
        require(_index < rollups.length, "Invalid index");
        return rollups[_index];
    }

    function getRollups() public view returns (Rollup[] memory) {
      Rollup[] memory rollupsArray = new Rollup[](rollups.length);
      for (uint i = 0; i < rollups.length; i++) {
        rollupsArray[i] = rollups[i];
      }
      return rollupsArray;
    }

    function getRollupCount() public view returns (uint256) {
        return rollups.length;
    }
}