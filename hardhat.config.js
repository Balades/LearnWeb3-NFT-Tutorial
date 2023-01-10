require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  // defining the test network to use 
  networks : {
    goerli: {
      url:process.env.ALCHEMY_API_KEY_URL,
      // private key goes here(the account you want to use to deploy)
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
