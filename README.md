# Vue Drizzle dApp that uses a forked mainnet

> IMPORTANT: This example is in heavy development, the basic functionality is not completed yet.

This is an example dApp with a Vue/Drizzle front-end that uses a forked mainnet as a localhost blockchain simulation (via ganache-cli).

> This will not download the whole mainnet state on your computer, so no need to worry about disk space. Read more [here](https://studydefi.com/forking-off-mainnet/), [here](https://medium.com/@samajammin/how-to-interact-with-ethereums-mainnet-in-a-development-environment-with-ganache-3d8649df0876), and [here](https://medium.com/ethereum-grid/forking-ethereum-mainnet-mint-your-own-dai-d8b62a82b3f7).

## Install the needed dependencies

```bash
npm install
```

## Enter the required secret keys in `.env`

Rename the `.env-example` file into `.env` and enter the required secret keys.

> IMPORTANT: Do not use Private Keys that you use on a real mainnet!

## MetaMask setup

Add a new Custom RPC:

- Name: Ganache 8545
- URL: http://127.0.0.1:8545
- Chain ID: 1337

Also import both of your private keys from `.env` as MetaMask accounts (if you haven't got them there already).

## Run ganache-cli with a forked mainnet state

**Option A (recommended):**

```bash
npm start
```

**Option B:**

```bash
ganache-cli --fork <infura-url> --networkId=1337 --account="<first-private-key>,1000000000000000000000" --account="<second-private-key>,1000000000000000000000" 
```

## Run tests

```bash
npm test
```

> Important: make sure to start the Ganache instance with `npm start` before you run tests. 

## Sources

This example builds upon two Truffle boxes:

- [vue-box](https://github.com/truffle-box/vue-box) - a Vue/Drizzle example box
- [defi-box](https://github.com/truffle-box/defi-box) - an example of how to fork mainnet with Ganache CLI
