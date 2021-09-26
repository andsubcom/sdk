# ✨ Awake SDK ✨

This reporisotry contains main Typescript SDK for accessing Awake subscription protocol on EVM based chains. 

- **pay with crypto** - safe and anonymous
- **swap using any tokens** - user pay with any token, you get the token you need
- **no backend needed** - all data required for subsriptions and ouser managment stored on-chain
- **no third-party services and complex checkout steps** - keep users on your site, only Metamask login required

The SDK methods include support for both parts user and admin

### 💻 Admin
- Create and manage oraganizations
- View and manage user subscriptions

### 🌻 User
- Check access
- Create subscription
- Extend subscription
- Revoke access

### 🛫 Set up

1. Create `.env` and add Ethereum address private key to PRIVATE_KEY
3. Install deps by running `npm install`
 
### 🔧 API Overview
- Create organization with the given name
```ts
awake.subscriptionHub.createOrganization(orgName: string, txParams?: TxBase)
```
- Create subscription for the organization
```ts
awake.subscriptionHub.createSubscription(orgId: BigNumberish, orgName: string, token: string, amount: BigNumberish, period: BigNumberish, txParams?: TxBase)
```
- Subscribe user
```ts
awake.subscriptionHub.buySubscription(subscriptionId: BigNumberish, txParams?: TxBase)
```
- Extend existing subscription
```ts
awake.subscriptionHub.extendSubscription(tokenId: BigNumberish, txParams?: TxBase)
```
- Check user ETH address for subscription
```ts
awake.subscriptionHub.checkUserHasActiveSubscription(user: string, subscriptionId: BigNumberish)
```
- List all available org subscriptions
```ts
awake.subscriptionHub.getAllSubscriptionsForOrganization(orgId: BigNumberish)
```
- Get additional organization info 
```ts
awake.subscriptionHub.getOrganizationInfo(orgId: BigNumberish)
```
- Get subscription details
```ts
awake.subscriptionHub.getSubscriptionInfo(subscriptionId: BigNumberish)
```

