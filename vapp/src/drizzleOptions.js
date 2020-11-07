//import ContractName from './contracts/ContractName.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    // ContractName
  ],
  events: {
    // ContractName: ['ContractFunction']
  },
  polls: {
    accounts: 15000
  }
}

export default options
