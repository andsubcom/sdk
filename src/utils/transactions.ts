import { BigNumber, BigNumberish, Bytes, BytesLike } from "ethers/lib/ethers";

export declare type GasPriceKey = 'instant' | 'fast' | 'standard' | 'low';

export declare type TxBase = {
    to?: string,
    from?: string,
    nonce?: BigNumberish,

    gasLimit?: BigNumberish,
    gasPrice?: number | bigint | BigNumber | Bytes | GasPriceKey,

    data?: BytesLike,
    value?: BigNumberish,
    chainId?: number
}
