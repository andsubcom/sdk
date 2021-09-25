import { BigNumberish, Contract, Signer } from 'ethers';
import { BaseProvider } from '@ethersproject/providers';
import abis from "../abis";
import { TxBase } from '../utils/transactions';

export class SubscriptionHub {
    contract: Contract;

    constructor(signerOrProvider: Signer | BaseProvider, addressOrName: string) {
        this.contract = new Contract(
            addressOrName,
            abis.SubscriptionsHub,
            signerOrProvider,
          );      
    }

    createOrganization = async (orgName: string, txParams?: TxBase) => {
        return await this.contract.createOrganization(orgName, txParams);
    }
    
    createSubscription = async (
        orgId: BigNumberish,
        orgName: string, 
        token: string, 
        amount: BigNumberish, 
        period: BigNumberish, 
        txParams?: TxBase
    ) => {
        return await this.contract.createSubscription(orgId, orgName, token, amount, period, txParams);
    }

    buySubscription = async (subscriptionId: BigNumberish, txParams?: TxBase) => {
        return await this.contract.buySubscription(subscriptionId, txParams);
    }

    extendSubscription = async (tokenId: BigNumberish, txParams?: TxBase) => {
        return await this.contract.extendSubscription(tokenId, txParams);
    }

    checkUserHasActiveSubscription = async (user: string, subscriptionId: BigNumberish) => {
        return await this.contract.checkUserHasActiveSubscription(user, subscriptionId);
    }

    getAllSubscriptionsForOrganization = async (orgId: BigNumberish) => {
        return await this.contract.getAllsubscriptionsForOrganization(orgId);
    }

    getOrganizationInfo = async (orgId: BigNumberish) => {
        return await this.contract.getOrganizationInfo(orgId);
    }

    getSubscriptionInfo = async (subscriptionId: BigNumberish) => {
        return await this.contract.getSubscriptionInfo(subscriptionId);
    }

}