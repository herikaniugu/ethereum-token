/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require("@nomiclabs/hardhat-waffle");

 const INFURA_URL = "https://rinkeby.infura.io/v3/a1fbd7a559524a5abd4dd6fe6b248ca8";
 const PRIVATE_KEY = "a2f0585c209cc11d01fe1f2640a47b26a42fe494ac7ad181743109597caa088a";
 
 module.exports = {
   solidity: "0.8.0",
   networks: {
     rinkeby: {
       url: INFURA_URL,
       accounts: [`0x${PRIVATE_KEY}`]
     }
   }
 };