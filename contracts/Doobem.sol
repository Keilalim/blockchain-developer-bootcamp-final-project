// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract Doobem {
    address[16] public volunteers;

// choosing a job
function chose(uint jobId) public returns (uint) {
  require(jobId >= 0 && jobId <= 15);

  volunteers[jobId] = msg.sender;

  return jobId;
  }

  function getvolunteers() public view returns (address[16] memory) {
  return volunteers;
}

 

}


//  Compile:        truffle compile
//  Migrate:        truffle migrate
//Test contracts: truffle test
 // Run dev server: npm run dev
 // git add.
 //git commit -m "MENSAGEM”
 //git push -u origin main