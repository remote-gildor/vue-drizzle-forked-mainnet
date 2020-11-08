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
  let wallet = accounts[1];

  // get Dai contract
  const daiContract = new web3.eth.Contract(erc20.dai.abi, erc20.dai.address);

  beforeEach(async () => {
    this.instance = await DaiBuyer.deployed();
  });

  describe("Initial balances", () => {

    it("User has 100 ETH balance", async () => {
      let balance = await web3.eth.getBalance(wallet);
      assert.equal(balance, ether(100));
    });

    it("User has 0 DAI balance", async () => {
      const daiBalance = await daiContract.methods.balanceOf(wallet).call();

      console.log(daiBalance);

      assert.equal(daiBalance, 0);
    });

  });

});
