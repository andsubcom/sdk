const { AwakeSDK } = require("../dist/index.js");
const { getDefaultProvider, Wallet } = require('ethers');
const { estimateGasPrice } = require("../dist/utils/gas");
require('dotenv/config'); 

(async function() {
    const provider = getDefaultProvider('ropsten');
    let wallet = new Wallet(`0x${process.env.PRIVATE_KEY}`);

    const awake = new AwakeSDK(
        provider,
        wallet
    );
    await awake.init()
    
    let orgName = "0xSampleName";
    let args = [orgName];
    const contract = awake.subscriptionHub.contract;

    const overrides = {
        gasPrice: 0,
        value: 0,
        gasLimit: 0,
    };

    overrides.gasPrice = await estimateGasPrice();
    overrides.gasLimit = await contract.estimateGas['createOrganization'](...args);

    let tx = await awake.subscriptionHub.createOrganization(orgName, overrides);
    console.log(tx);
})();