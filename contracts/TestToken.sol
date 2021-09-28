//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
  address Owner;
  mapping (address => uint) Balances;
  uint SwapRate = 1000;

  constructor(uint256 initialSupply) ERC20("ERC20 Test Token", "ETT") {
    Owner = msg.sender;
    Balances[Owner] = initialSupply;
    decimals();
  }

  function decimals() public view virtual override returns (uint8) {
    return 5;
  }

  function swap (address _address, uint _amount) public returns (bool) {
    require(Balances[Owner] > _amount, "No enouth rest tokens!");
    _transfer(Owner, _address, _amount / SwapRate);
    Balances[Owner] -= _amount;
    Balances[_address] += _amount;
    
    return true;
  }

  function transfer (address _sender, address _recipient, uint _amount) public returns (bool) {
    require(Balances[_sender] > _amount, "No enouth rest tokens!");
    Balances[_sender] -= _amount;
    Balances[_recipient] += _amount;
    
    return true;
  }

  function swapRate () public view returns (uint) {
    return SwapRate;
  }
}
