export interface ContractAddresses {
    subscriptionHub: string,
    subscriptionTicketNFT: string,
}

const MAINNET_ADDRESSES: ContractAddresses = {
    subscriptionHub: '0x0',
    subscriptionTicketNFT: '0x0',
};

const ROPSTEN_ADDRESSES: ContractAddresses = {
    subscriptionHub: '0x0',
    subscriptionTicketNFT: '0x0',
};

const LOCALHOST_ADDRESSES: ContractAddresses = {
    subscriptionHub: '0x0',
    subscriptionTicketNFT: '0x0',
};

export const addresses:{[key: number]: ContractAddresses}  = {
    1: MAINNET_ADDRESSES,
    3: ROPSTEN_ADDRESSES,
    1337: LOCALHOST_ADDRESSES,
};