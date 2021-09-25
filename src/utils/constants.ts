import { BigNumber } from "@ethersproject/bignumber";
import { GasPrices } from "./gas";

export const NETWORKS: {[key: number]: string} = {
    1: 'mainnet',
    3: 'ropsten',
    1337: 'localhost',
};

export const SUBTRACT_GAS_LIMIT = 100000;
export const DEFAULT_CHAIN_ID = 3;
export const DEFAULT_NETWORK = 'ropsten';
export const DEFAULT_MNEMONIC: string = "test test test test test test test test test test test junk";

export const DEFAULT_GAS_PRICES: {[key: number]: GasPrices} = {
    1: {
        instant: 23,
        fast: 17,
        standard: 13,
        low: 9,
    },
    3: {
        instant: 10,
        fast: 5,
        standard: 3,
        low: 1,
    },
    1337: {
        instant: 1,
        fast: 1,
        standard: 1,
        low: 1,
    }
};
