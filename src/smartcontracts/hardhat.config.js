require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli:{
      url: "https://eth-goerli.g.alchemy.com/v2/gh4d1-dAT4B_1Khy86s7JUbFhQIclYqO",
      accounts: [`078e329378f4c1ca774b87f37fbcf3bbd27679eb2beef946547724f8ea7115cb`]
    }
  },
  etherscan:{
    apiKey:'ID5DKPHJ6SYM1UQDK1IKECAXKIPPC9EX2C'
  }
};
