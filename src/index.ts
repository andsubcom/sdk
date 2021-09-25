import { AwakeBase } from './AwakeBase';
import { utils, Wallet } from 'ethers';
import { BaseProvider } from '@ethersproject/providers';

export class AwakeSDK extends AwakeBase {
  utils: any;
  /**
   * Creates a class for working with the awake subscription service on Ethereum.
   * @constructor
   * @param provider {Ethers provider, default on ropsten}
   * @param signer {Ethers wallet instance}
   * @notice utils {Ethers utils}
   */
  constructor(provider: BaseProvider, signer?: Wallet, options?: { defaultGas?: number; defaultGasPrice?: any; }) {
    super(provider, signer, options);
    this.utils = utils;
  }
}
