import hre from "hardhat"

async function main() {

  const price = await hre.ethers.deployContract("Example", [
    "ERC 404 Example",                             // string memory name_,
    "E4E",                                         // string memory symbol_,
    "18",                                          // uint8 decimals_,
    "100000000",                                   // uint256 maxTotalSupplyERC721_,
    "0xadCD10BCA3B5b00225345a9d41119F9DD40034Ff",  // address initialOwner_,
    "0xadCD10BCA3B5b00225345a9d41119F9DD40034Ff"   // address initialMintRecipient_
  ], {});

  const address = await price.getAddress();

  console.log(address, "deployed...");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})


/**

0x1194251e210A3B3a853Fb0a71485f493176781B6 deployed...

*/