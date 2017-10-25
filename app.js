const express = require("express");
const Web3 = require("web3");

const contract = require("./contract");

const app = express();
const web3 = new Web3();
const { eth } = web3;
const transaction = "0x9650ebcfbe2b18f4246947648c49def01a439981f3581563cd945a012bd59e77";

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
const helloContract = web3.eth.contract(contract.ABI).at(contract.adress);




console.log(web3.eth.coinbase);
console.log(eth.getTransaction(transaction));
console.log(eth.blockNumber);


app.get("/", function(req, res) {
  const { personal } = web3;

  personal.unlockAccount(eth.coinbase, "123", 1000);

  res.send(helloContract.setData.sendTransaction("Hell", { from: eth.coinbase }));
});

app.listen(8000, function() {
  console.log("Our server on 8000 port");
});