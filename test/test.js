const { expect } = require("chai");
const { ethers } = require("hardhat");
const config = require('../hardhat.config');

describe("ChainId Test", function () {
  it("Contract should return chain id according to the configuration", async function () {
    const ChainId = await ethers.getContractFactory("ChainIdTest");
    const chainId = await ChainId.deploy();
    await chainId.deployed();

    expect(await chainId.getChainId()).to.equal(config.networks.hardhat.chainId);
  });
/*
  it("Provider should return chain id according to the configuration", async function () {
    const provider = new ethers.providers.JsonRpcProvider();//config.networks.localhost.url);
    console.log(hre.network.name)
    expect(provider.network.chainId).to.equal(config.networks.hardhat.chainId);
  });*/
});
