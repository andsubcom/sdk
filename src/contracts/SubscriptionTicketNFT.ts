import { BigNumber, BigNumberish, BytesLike, Contract, Signer} from 'ethers';
import { BaseProvider } from '@ethersproject/providers';
import abis from "../abis";
import { TxBase } from '../utils/transactions';

export class SubscriptionTicketNFT {
    contract: Contract;

    constructor(signerOrProvider: Signer | BaseProvider, addressOrName: string) {
        this.contract = new Contract(
            addressOrName,
            abis.SubscriptionTicketNFT,
            signerOrProvider,
          );      
    };

    getUserTokenIds = async (user: string) => {
        return await this.contract.getUserTokenIds(user);
    }

    getUserSubscriptionTokenIds = async (user: string, subscriptionId: BigNumberish) => {
        return await this.contract.getUserSubscriptionTokenIds(user, subscriptionId);
    }

    checkUserHasActiveSubscription = async (user: string, subscriptionId: BigNumberish) => {
        return await this.contract.checkUserHasActiveSubscription(user, subscriptionId);
    }

    mint = async (user: string, subscriptionId: BigNumberish, start: BigNumberish, end: BigNumberish, txParams?: TxBase) => {
        return await this.contract.mint(user, subscriptionId, start, end, txParams);
    }

    extend = async (tokenId: BigNumberish, end: BigNumberish, txParams?: TxBase) => {
        return await this.contract.extend(tokenId, end, txParams);
    }
}