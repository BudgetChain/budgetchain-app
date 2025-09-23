# BudgetChain Example Contract Deployment Guide

## Overview

This guide will help you deploy the example contract to StarkNet testnet using the deployment scripts we've set up.

## Prerequisites

1. **StarkNet Account**: You need a StarkNet account with some ETH for gas fees
2. **Node.js**: Version 16 or higher
3. **Scarb**: Cairo package manager (already installed)

## Setup Steps

### 1. Create StarkNet Account (if you don't have one)

You can create a StarkNet account using:
- **Argent X** wallet browser extension
- **Braavos** wallet browser extension
- **StarkNet CLI** tools

### 2. Get Testnet ETH

Visit the [StarkNet Faucet](https://starknet-faucet.vercel.app/) to get testnet ETH for your account.

### 3. Configure Environment Variables

Create a `.env` file in the `contracts/script/` directory:

```bash
cd contracts/script
cp env.example .env
```

Edit the `.env` file with your account details:

```env
# Your StarkNet account address (from your wallet)
STARKNET_ACCOUNT_ADDRESS=0x0521beee0243e3b42f9cceac335c1d51f85c888a7b03c89c100b085a7b21f5e7

# Your account private key (keep this secure!)
STARKNET_PRIVATE_KEY=0x061f2f236030d4a99173507cdf1d6d5a682280f470b5096b70be485bf0f6d455

# Network configuration
STARKNET_NETWORK=testnet
SEPOLIA_NODE_URL=https://starknet-sepolia.public.blastapi.io/rpc/v0_8

# Admin address (can be same as your account)
ADMIN_ADDRESS=0x0521beee0243e3b42f9cceac335c1d51f85c888a7b03c89c100b085a7b21f5e7
```

### 4. Build the Contract

```bash
cd contracts/example
scarb build
```

### 5. Deploy the Contract

```bash
cd ../script
npm run deploy:example
```

## Expected Output

When deployment is successful, you should see:

```
🚀 Deploying Example contract...
==================================================
Connected to account: 0x0521beee0243e3b42f9cceac335c1d51f85c888a7b03c89c100b085a7b21f5e7
Constructor Arguments: []
Declaring and deploying Example contract...
Contract declared with class hash: 0x0123456789abcdef...
Contract deployed at address: 0x0987654321fedcba...
✅ Example contract connected successfully!
Saved deployment summary to example_deployment.json

--- Testing Example Contract ---
Initial balance: 0
Increasing balance by 100...
New balance: 100
✅ Contract functionality working correctly!
```

## Deployment Files Generated

After successful deployment, you'll find:

- `example_deployment.json` - Contains deployment details including:
  - Contract address
  - Class hash
  - Transaction hashes
  - Network information

## Contract Functionality

The example contract includes:

- **`increase_balance(amount)`**: Increases the contract's balance
- **`get_balance()`**: Returns the current balance

## Troubleshooting

### Common Issues

1. **"Insufficient balance"**: Add more testnet ETH to your account
2. **"Invalid account"**: Check your account address and private key
3. **"Network error"**: Verify your internet connection and RPC URL

### Getting Help

- Check the StarkNet documentation: https://docs.starknet.io/
- Visit the StarkNet Discord: https://discord.gg/starknet
- Check transaction status on StarkScan: https://sepolia.starkscan.co/

## Next Steps

Once the example contract is deployed successfully, you can:

1. **Interact with the contract** using StarkScan or your wallet
2. **Deploy other contracts** using the same process
3. **Build your own contracts** following the same pattern

## Security Notes

- Never commit `.env` files to version control
- Keep your private keys secure
- Use testnet for development and testing only
- Verify all addresses before mainnet deployment
