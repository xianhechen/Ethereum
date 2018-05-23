import web3 from "./web3";

const address = "0x885ffD7728e6433B9403a8b7B5B985EA42F5C231";

const abi = [
	{
		constant: true,
		inputs: [],
		name: "manager",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [],
		name: "pickWinner",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "random",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "getPlayers",
		outputs: [{ name: "", type: "address[]" }],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [],
		name: "enter",
		outputs: [],
		payable: true,
		stateMutability: "payable",
		type: "function"
	},
	{
		constant: true,
		inputs: [{ name: "", type: "uint256" }],
		name: "players",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{ inputs: [], payable: true, stateMutability: "payable", type: "constructor" }
];

export default new web3.eth.Contract(abi, address);
