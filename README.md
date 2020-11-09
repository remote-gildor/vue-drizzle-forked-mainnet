# Vue Drizzle dApp that uses a forked mainnet

This is an example dApp with a Vue/Drizzle front-end that uses a forked mainnet as a localhost blockchain simulation (via ganache-cli).

> This will not download the whole mainnet state on your computer, so no need to worry about disk space. Read more [here](https://studydefi.com/forking-off-mainnet/), [here](https://medium.com/@samajammin/how-to-interact-with-ethereums-mainnet-in-a-development-environment-with-ganache-3d8649df0876), and [here](https://medium.com/ethereum-grid/forking-ethereum-mainnet-mint-your-own-dai-d8b62a82b3f7).

## Install the needed dependencies

In root:

```bash
npm install
```

Then navigate to vapp/ and install npm dependencies there, too:

```bash
cd vapp && npm install
```

## MetaMask setup

Add a new Custom RPC:

- Name: Ganache 8545
- URL: http://127.0.0.1:8545 (or localhost:8545)
- Chain ID: 1337 (or 0x539)

## Run ganache-cli with a forked mainnet state

```bash
ganache-cli --fork <node-url>
```

For a node URL, you can use either your own mainnet node, or [Alchemy](https://dashboard.alchemyapi.io/signup?referral=5d4115e7-8c63-468d-b248-59f96c220a14), or Infura. 

**Alchemy is better than Infura** because it gives you unlimited archival node access (with Infura you only get the last 30 min, which means you have to restart Ganache every 30 minutes). Also, Alchemy analytics are much better than Infura's, and you can see requests right away (Infura has a long lag).

> You can add an optional flag of `--networkId=1337`. If you'd like to create one or more accounts with ETH balances, use this flag: `--account="<private-key>,1000000000000000000000"` (if you want multiple accounts, use this flag multiple times).

## Run tests

```bash
truffle test
```

All the next runs can be just `npm test`.

> Important: make sure to start the Ganache instance before you run tests. You might have to do `truffle migrate` or `truffle migrate --reset` before running tests.

## Run Vue dApp

Make sure ganache-cli is running and the smart contract is deployed:

```bash
truffle migrate
```

> Consider doing `truffle migrate --reset` instead if you've changed the smart contract in the meantime.

Then navigate to the vapp folder and run the Vue dApp:

```bash
cd vapp
npm run serve
```
