const hre = require("hardhat");

async function main() {
  const PaymentGateway = await hre.ethers.getContractFactory("PaymentGateway");
  const paymentGateway = await PaymentGateway.deploy();

  await paymentGateway.deployed();
  console.log(`Contract deployed at: ${paymentGateway.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
