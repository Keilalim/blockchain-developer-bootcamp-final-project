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
 //git commit -m "MENSAGEM” git commit -m "MENSAGEM”
 //git push -u origin main
 //git checkout <sua-branch> && git pull origin <sua-branch>
 //leia com atenção: se você não quer as alterações que estão no remoto, e quer sobrescrever tudo que está lá com o repositório local, use COM CUIDADO o comando abaixo.
 //git push origin <sua-branch> --force
 // Web3 usei o link do curso https://github.com/ChainSafe/web3.js we3libraries used npm install web3 deu erro GET https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js net::ERR_FAILED
 //no passo 2 do web3 módulo 4
 //npm install -g lite-server pra instalar lite-server
 //git remote set-url origin https://github.com/keilaestuda/pet-shop-tutorial-29_10
 //git push origin master
 //git remote update depois git push --force origin master
