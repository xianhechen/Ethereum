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

    function pickWinner() public  restricted {
        uint index = random() % players.length;
        players[index].transfer(address(this).balance);
        // reset contract
        players = new address[](0); // initial size of 0
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    // function for web apps to get players
    function getPlayers() public view returns (address[]) {
        return players;
    }
}
