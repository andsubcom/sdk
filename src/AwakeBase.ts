import { addresses, ContractAddresses} from './utils/addresses';
import { BigNumber, BytesLike, getDefaultProvider, Signer, Wallet } from 'ethers';
import { BaseProvider } from '@ethersproject/providers';

import { SUBTRACT_GAS_LIMIT, NETWORKS, } from './utils/constants'
import { SubscriptionHub, SubscriptionTicketNFT } from "./contracts";

export class AwakeBase {
    provider: BaseProvider;
    networkId: number;
    blockGasLimit: BigNumber;
    network: string
    signer: Signer;
    contracts: ContractAddresses;
    subscriptionHub: SubscriptionHub;
    subscriptionTicketNFT: SubscriptionTicketNFT;
  
    constructor(provider: BaseProvider,  signer?: Wallet, options?: { defaultGas?: number; defaultGasPrice?: any; }) {
      this.signer = signer;
  
      this.provider = provider || getDefaultProvider();
    }
  
    async init() {
      const network = await this.provider.getNetwork();

      this.networkId = network.chainId;
      this.network = NETWORKS[this.networkId];
      this.contracts = addresses[this.networkId];

      this.subscriptionHub = new SubscriptionHub(this.signer || this.provider, addresses[this.networkId].subscriptionHub);
      this.subscriptionTicketNFT = new SubscriptionTicketNFT(this.signer || this.provider, addresses[this.networkId].subscriptionTicketNFT);
    }
  
    async setGasLimit() {
        const block = await this.provider.getBlock('latest')
        this.blockGasLimit = block.gasLimit.sub(BigNumber.from(SUBTRACT_GAS_LIMIT));
    }

    async estimateGasPrice() {
      const block = await this.provider.getBlock('latest')
      this.blockGasLimit = block.gasLimit.sub(BigNumber.from(SUBTRACT_GAS_LIMIT));
    }
}