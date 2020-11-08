pragma solidity >=0.6.2 <0.7.0;

import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';

/*
A smart contract that buys Dai on Uniswap on behalf of the ETH sender (msg.sender)
*/
contract DaiBuyer {

  address internal UNISWAP_FACTORY = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
  address internal UNISWAP_ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
  address internal DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;

  IUniswapV2Router02 public uniswapRouter;

  event Received(address, uint);

  constructor() public {
    uniswapRouter = IUniswapV2Router02(UNISWAP_ROUTER);
  }

  receive() external payable {
    // emit the event that says that ETH was received by the sender
    emit Received(msg.sender, msg.value);

    // require the msg.value to be a non-zero value
    require(msg.value > 0);

    // prepare Uniswap path
    address[] memory path = new address[](2);
    path[0] = uniswapRouter.WETH();
    path[1] = DAI;

    // deadline
    uint deadline = now + 15;

    // buy Dai on Uniswap (receive a minimum of 0 Dai and send it back to the sender)
    uniswapRouter.swapExactETHForTokens(0, path, msg.sender, deadline);
  }

}
