require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const secret = fs.readFileSync(".secret").toString();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/a1fbd7a559524a5abd4dd6fe6b248ca8",
      accounts: [`0x${secret}`]
    }
  }
};