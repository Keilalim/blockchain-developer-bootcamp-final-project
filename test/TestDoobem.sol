pragma solidity >=0.4.22 <0.9.0;

//pragma solidity >=0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Doobem.sol";

contract TestDoobem {
  // The address of the Doobem contract to be tested
  Doobem doobem = Doobem(DeployedAddresses.Doobem());

  // The id of the Job that will be used for testing
  uint expectedJobId = 8;

  // The expected Volunteer of Job is this contract
  address expectedVolunteers = address(this);

}
// Testing the choose() function
function testUserCanChoosejobId() public {
  uint returnedJobId = Doobem.Volunteer(expectedjobId);
  Assert.equal(returnedId, expectedjobId,"Choose of the expected job should match what is returned.");
}
// Testing retrieval of a single job´s owner
function testGetVolunteersAddressByJobId() public {
  address volunteers = doobem.volunteers(expectedjobId);

  Assert.equal(volunteers, expectedVolunteers, "Owner of the expected job should be this contract");
}
// Testing retrieval of all Volunteers
function testGetVolunteersAddressByJobId() public {
  // Store volunteers in memory rather than contract's storage
  address[8] memory volunteers = doobem.getVolunteers();

  Assert.equal(volunteers[expectedJobId], expectedVolunteers, "Volunteer of the expected Job should be this contract");
}