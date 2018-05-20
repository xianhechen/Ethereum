pragma solidity ^0.4.24;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() public payable {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether);

        players.push(msg.sender);
    }
    
    function random() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
    }
}
