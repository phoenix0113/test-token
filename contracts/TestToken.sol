//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
  uint SwapRate = 1000;

  constructor(uint256 initialSupply) ERC20("ERC20 Test Token", "ETT") {
    _mint(msg.sender, initialSupply);
    decimals();
  }

  function decimals() public view virtual override returns (uint8) {
    return 5;
  }

  function swapRate () public view returns (uint) {
    return SwapRate;
  }
}
