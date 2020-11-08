require("dotenv").config();
const { ethers } = require("ethers");
const erc20 = require("@studydefi/money-legos/erc20");

const fromWei = (x, u = 18) => ethers.utils.formatUnits(x, u);

const DaiBuyer = require("../vapp/src/contracts/DaiBuyer.json");

describe("DaiBuyer.sol", () => {
  let wallet;
  let provider = ethers.getDefaultProvider();

  // get DaiBuyer contract instance
  let daiBuyerAddress = DaiBuyer.networks["1"].address;
  let DaiBuyerContract = new ethers.Contract(daiBuyerAddress, DaiBuyer.abi, provider);

  console.log("DAI address: " + erc20.dai.address);

  // Dai contract
  const daiContract = new ethers.Contract(
    erc20.dai.address,
    erc20.dai.abi,
    provider
  );

  beforeAll(async () => {
    wallet = global.wallet;
  });

  test("initial DAI balance of 0", async () => {
    const daiBalance = await daiContract.balanceOf(wallet.address);
    expect(fromWei(daiBalance)).toBe("0.0");
  });

  test("initial ETH balance of 1000 ETH", async () => {
    const ethBalance = await wallet.getBalance();
    expect(fromWei(ethBalance)).toBe("1000.0");
  });

  test("send ETH to DaiBuyer contract and receive Dai back", async () => {

    /*
    const response = await wallet.sendTransaction({
      to: daiBuyerAddress,
      value: ethers.utils.parseEther('10')
    });
    */

    await DaiBuyerContract.buyDai({
      from: wallet.address,
      value: ethers.utils.parseEther('10')
    });

    //const ethBalance = await wallet.getBalance();
    //expect(fromWei(ethBalance)).toBe("1000.0");

    //const daiBalance = await daiContract.balanceOf(wallet.address);
    //expect(fromWei(daiBalance)).toBe("0.0");

  });
});