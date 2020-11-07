pragma solidity >=0.6.2 <0.7.0;

import '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';
import '@uniswap/v2-periphery/contracts/UniswapV2Router02.sol';

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
    // buy Dai on Uniswap

  }

}
