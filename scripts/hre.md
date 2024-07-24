## Hardhat Runtime Environmentt ## 

- jadi ini adalah inisiasi instance untuk mengakses beberapa plugin dan function di hardhat , dengan mendefinisikan 

/* const hre = require(hardhat) *\

- untuk membangun project terkadnag membutuhkan beberapa library seperti ethers dan web3 

- kita bisa mengimportnya melalui hardhat.config.js agar ini bersifat global dengan fungsi extendEnvironment

- sebenarnya bisa saja kalau kita import di setiap project , tapi kalau di setel di hardhat config itu tidak perlu install lagi 

// extendEnvironment( 
    (hre) => { 
        const web3 = require("web3") ; 
        const {ethers} = require("ethers") ; 

        hre.web3 = web3 
        hre.ethers = ethers ; 

        h
    }
)

- compatibel antara hardhat ethers node harus di jaga 

