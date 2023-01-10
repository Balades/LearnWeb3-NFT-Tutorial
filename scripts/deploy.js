// import ethers
const { ethers } = require("hardhat");

async function main() {

// 1. define contract that you want to deploy
const contract = await ethers.getContractFactory("NFTe");

// 2. deploy the contract
const deployedContract = await contract.deploy("BoredAssBoy","BAB");
// 2.1 wait for deployment to finish
await  deployedContract.deployed();

// 3. Print the address of the deployed contract
console.log("NFT Contract deployed: ", deployedContract.address);
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
})