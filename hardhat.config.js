require("@nomicfoundation/hardhat-toolbox"); // Menggunakan Hardhat Toolbox yang termasuk ethers
 // Plugin Ethers

module.exports = {
  solidity: "0.8.4", // Versi Solidity yang digunakan
  networks: {
    hardhat: {
      // Konfigurasi untuk jaringan Hardhat lokal
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7", // URL RPC untuk Rinkeby
      accounts: [`0x755ed194e2287e4e636bdda6b2c6c0dd0bc3eb50d2dd23f6c82bcd78922dd396`] // Daftar private key akun yang digunakan untuk deploy
    }
  }
};
