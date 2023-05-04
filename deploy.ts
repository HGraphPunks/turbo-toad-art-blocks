import { ethers } from 'hardhat';

async function main() {
  const ArtBlocks = await ethers.getContractFactory('ArtBlocks');
  const artBlocks = await ArtBlocks.deploy();
  await artBlocks.deployed();
  console.log('ArtBlocks deployed to:', artBlocks.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
