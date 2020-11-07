const path = require('path');
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "vapp/src/contracts"),

  networks: {
    test: {
      skipDryRun: true,
      host: "127.0.0.1",
      port: 8545,
      network_id: "1337",
      provider: () => new HDWalletProvider(
        process.env.PRIV_KEY_DEPLOY,
        "http://127.0.0.1:8545",
      ),
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {   
               // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 1500

        },
        
        evmVersion: "byzantium"
      }
    },
  },

};
