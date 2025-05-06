
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PaymentGateway {
    address public owner;
    mapping(address => uint256) public payments;

    event PaymentReceived(address indexed payer, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function pay() public payable {
        require(msg.value > 0, "Must send some ether");
        payments[msg.sender] += msg.value;
        emit PaymentReceived(msg.sender, msg.value);
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
