import { BigNumber } from "@ethersproject/bignumber";
import { utils } from "ethers/lib/ethers";
import { GasPriceOracle } from "gas-price-oracle";
import { DEFAULT_CHAIN_ID, DEFAULT_GAS_PRICES } from "./constants";

export declare type GasPrices = {
    instant: number,
    fast: number,
    standard: number,
    low: number,
}

export declare type GasPriceOracleOptions = {
    chainId: number,
    defaultRpc: string,
    timeout: number,
    defaultFallbackGasPrices: GasPrices,
}

export declare type GasPriceKey = 'instant' | 'fast' | 'standard' | 'low';

const options: GasPriceOracleOptions = {
    chainId: 1,
    defaultRpc: 'https://api.mycryptoapi.com/eth',
    timeout: 10000,
    defaultFallbackGasPrices: DEFAULT_GAS_PRICES[DEFAULT_CHAIN_ID],
};

export const currentGasPrices = async (oracle?: GasPriceOracle, fallbackGasPrices?: GasPrices): Promise<GasPrices> => {
    if (oracle == null) {
        oracle = new GasPriceOracle(options);
    }

    return await oracle.gasPrices(fallbackGasPrices).then((gasPrices: GasPrices): GasPrices => {
        return gasPrices;
    });
}

export const estimateGasPrice = async (priceKey: GasPriceKey = "fast", oracle?: GasPriceOracle, fallbackGasPrices?: GasPrices): Promise<number | BigNumber> => {
    var prices = await currentGasPrices(oracle, fallbackGasPrices);

    if (prices == null) {
        return DEFAULT_GAS_PRICES[DEFAULT_CHAIN_ID][priceKey];
    }
    let gweiPrice = prices[priceKey].toString();
    let weiPrice = utils.parseUnits(gweiPrice, 'gwei');

    return weiPrice;
}