const hre = require('hardhat');

async function main(){
    const NFT = await hre.ethers.getContractFactory('ERC721');
    const nft = await NFT.deploy("ChainNFT","CFT");
    await nft.deployed();
    
    console.log(`NFT deployed to ${nft.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});