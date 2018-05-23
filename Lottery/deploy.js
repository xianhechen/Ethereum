const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider( // infura provider
	"father reunion logic athlete fiction clever helmet enemy fix curve rail funny",
	"https://rinkeby.infura.io/oAkWNrCw1R8oI3v0W6kG" // easier than geth? lol
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log("Attemppting to deploy from account", accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({
			data: "0x" + bytecode
		})
		.send({
			gas: "1000000",
			from: accounts[0]
		});

	console.log(interface);
	console.log("Contract deployed to: ", result.options.address);
};
deploy();
