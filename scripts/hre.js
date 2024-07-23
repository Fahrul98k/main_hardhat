const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners(); // Mengambil signer dari Hardhat Runtime Environment

  console.log("Deploying contracts with the account:", deployer.address);

  // Mendapatkan saldo akun
  const balance = await deployer.provider.getBalance(deployer.address);
  
  // Mengonversi saldo dari wei ke ether secara manual
  const balanceInEther = hre.ethers.utils.formatUnits(balance, "ether");
  console.log("Account balance:", balanceInEther, "ETH");

  // Menyebarkan kontrak (contoh)
  const Contract = await hre.ethers.getContractFactory("YourContractName");
  const contract = await Contract.deploy();
  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
