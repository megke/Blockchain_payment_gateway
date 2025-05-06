
const { ethers } = require("ethers");
const config = require("../config/config");
const contractABI = require("../contractABI.json"); // Exported ABI from Hardhat

const provider = new ethers.JsonRpcProvider(config.ALCHEMY_RPC_URL);
const wallet = new ethers.Wallet(config.PRIVATE_KEY, provider);
const contract = new ethers.Contract(config.CONTRACT_ADDRESS, contractABI, wallet);

async function processPayment(sender, amount) {
  const tx = await contract.pay({ value: ethers.parseEther(amount) });
  await tx.wait();
  return tx.hash;
}

module.exports = { processPayment };
