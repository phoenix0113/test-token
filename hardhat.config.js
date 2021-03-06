require("@nomiclabs/hardhat-waffle");
const PRIVATE_KEY = "37e7210fa73b662e59d1ad36ffe18b01e4e0c6dd0859f301a9b5900365d6a15c";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts"
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/f48c4326dcb24618ad730b6cd6634ca8",
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
