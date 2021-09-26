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
-
```ts
// Create organization with the given name
awake.subscriptionHub.createOrganization(orgName: string, txParams?: TxBase)
```
-
```ts
// Create subscription for the organization
awake.subscriptionHub.createSubscription(orgId: BigNumberish, orgName: string, token: string, amount: BigNumberish, period: BigNumberish, txParams?: TxBase)
```
-
```ts
// Subscribe user
awake.subscriptionHub.buySubscription(subscriptionId: BigNumberish, txParams?: TxBase)
```
-
```ts
// Extend existing subscription
awake.subscriptionHub.extendSubscription(tokenId: BigNumberish, txParams?: TxBase)
```
-
```ts
// Check user ETH address for subscription
awake.subscriptionHub.checkUserHasActiveSubscription(user: string, subscriptionId: BigNumberish)
```
-
```ts
// List all available org subscriptions
awake.subscriptionHub.getAllSubscriptionsForOrganization(orgId: BigNumberish)
```
-
```ts
// Get additional organization info 
awake.subscriptionHub.getOrganizationInfo(orgId: BigNumberish)
```
-
```ts
// Get subscription details
awake.subscriptionHub.getSubscriptionInfo(subscriptionId: BigNumberish)
```

