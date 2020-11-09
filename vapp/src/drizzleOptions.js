import DaiBuyer from './contracts/DaiBuyer.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    DaiBuyer
  ],
  events: {
    DaiBuyer: ['Completed']
  },
  polls: {
    accounts: 15000
  }
}

export default options
