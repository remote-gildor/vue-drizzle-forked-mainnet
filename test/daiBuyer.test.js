const {
  BN,           // Big Number support 
  constants,    // Common constants, like the zero address and largest integers
  expectEvent,  // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

const { assert } = require("chai");

const erc20 = require("@studydefi/money-legos/erc20");
const { web3 } = require('@openzeppelin/test-helpers/src/setup');

// helper
const ether = (n) => web3.utils.toWei(n.toString(), 'ether');

// artifacts
const DaiBuyer = artifacts.require("DaiBuyer");

contract("DaiBuyer", accounts => {
  // user's wallet and balances
  let wallet = accounts[1];
  let ethBalance;
  let daiBalance;

  // get Dai contract
  const daiContract = new web3.eth.Contract(erc20.dai.abi, erc20.dai.address);

  beforeEach(async () => {
    // update balances
    ethBalance = await web3.eth.getBalance(wallet);
    daiBalance = await daiContract.methods.balanceOf(wallet).call();
  });

  describe("DAI smart contract sanity check", () => {

    it("checks if DAI token name is correct", async () => {
      const daiName = await daiContract.methods.name().call();
      assert.equal(daiName, "Dai Stablecoin");
    });

  });

  describe("Send ETH to DaiBuyer and receive DAI", () => {
    const etherToSend = 1;
    const valueToSend = ether(etherToSend);
    let oldEthBalance;
    let oldDaiBalance;

    it("successfully sends ETH to DaiBuyer", async () => {
      assert.isTrue(ethBalance > 0); // if ETH balance dropped to 0, restart Ganache

      // store previous balances (needed in the next test)
      oldEthBalance = await web3.eth.getBalance(wallet);
      oldDaiBalance = await daiContract.methods.balanceOf(wallet).call();

      // send ETH transaction to DaiBuyer smart contract
      let tx = {
        from: wallet,
        to: DaiBuyer.address,
        value: valueToSend,
        gas: web3.utils.toBN(6721975)
      };

      await web3.eth.sendTransaction(tx);

    });
    
    it("shows that user now has a smaller ETH balance", async () => {
      assert.isTrue(oldEthBalance > ethBalance);
    });

    it("shows that user now has a bigger DAI balance than before", async () => {
      assert.isTrue(daiBalance > oldDaiBalance);
    });

  });

});
