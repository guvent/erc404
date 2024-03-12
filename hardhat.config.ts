import "dotenv/config"
import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-gas-reporter"

const mnemonic = process.env.MNEMONIC;

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.8.20" }, { version: "0.4.18" }] },
  gasReporter: {
    currency: "USD",
    gasPrice: 21,
    enabled: true,
  },
  networks: {
    // sepolia: {
    //   url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    //   accounts: [process.env.SEPOLIA_PRIVATE_KEY_1],
    // },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic },
    },
  },
}

export default config;
