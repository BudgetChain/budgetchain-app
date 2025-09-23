# BudgetChain Deployment Scripts

This directory contains deployment scripts for all BudgetChain smart contracts, following the pattern from the InheritX project.

## Setup

### 1. Install Dependencies

```bash
cd script
npm install
```

### 2. Configure Environment

Copy the environment template and fill in your values:

```bash
cp env.example .env
```

Edit `.env` with your StarkNet account details and network configuration.

### 3. Build Contracts

Before deploying, ensure all contracts are built:

```bash
# Build individual contracts
cd ../Budget && scarb build && cd ..
cd ../Milestones && scarb build && cd ..
cd ../Expenses && scarb build && cd ..
cd ../Goals && scarb build && cd ..
cd ../Reports && scarb build && cd ..
cd ../TransactionLedger && scarb build && cd ..
cd ../ProjectManagement && scarb build && cd ..
cd ../OrganizationManagement && scarb build && cd ..

# Or build all contracts
for contract in Budget Milestones Expenses Goals Reports TransactionLedger ProjectManagement OrganizationManagement; do
    echo "Building $contract..."
    cd $contract && scarb build && cd ..
done
```

## Deployment

### Deploy Individual Contracts

```bash
# Deploy specific contracts
npm run deploy:budget
npm run deploy:milestones
npm run deploy:expenses
npm run deploy:goals
npm run deploy:reports
npm run deploy:transaction-ledger
npm run deploy:project-management
npm run deploy:organization-management
```

### Deploy All Contracts

```bash
npm run deploy:all
```

## Scripts Overview

### Individual Deployment Scripts

Each contract has its own deployment script:

- `deploy_budget.js` - Deploy Budget Management Contract
- `deploy_milestones.js` - Deploy Milestone Tracking Contract
- `deploy_expenses.js` - Deploy Expense Tracking Contract
- `deploy_goals.js` - Deploy Financial Goals Contract
- `deploy_reports.js` - Deploy Reports and Analytics Contract
- `deploy_transaction_ledger.js` - Deploy Transaction Ledger Contract
- `deploy_project_management.js` - Deploy Project Management Contract
- `deploy_organization_management.js` - Deploy Organization Management Contract

### Batch Deployment Script

- `deploy_all.js` - Deploy all contracts in sequence with progress tracking

## Deployment Output

Each deployment script generates:

1. **Console Output**: Real-time deployment progress and status
2. **Deployment JSON**: Individual contract deployment details
3. **Consolidated Report**: Summary of all deployments (when using `deploy_all.js`)

### Example Deployment Output

```
🚀 Deploying Budget contract...
==================================================
Connected to account: 0x0521beee0243e3b42f9cceac335c1d51f85c888a7b03c89c100b085a7b21f5e7
Constructor Arguments: ["0x0521beee0243e3b42f9cceac335c1d51f85c888a7b03c89c100b085a7b21f5e7"]
Declaring and deploying Budget contract...
Contract declared with class hash: 0x0123456789abcdef...
Contract deployed at address: 0x0987654321fedcba...
✅ Budget contract connected successfully!
Saved deployment summary to budget_deployment.json

--- Testing Budget Contract ---
Admin address: 0x0521beee0243e3b42f9cceac335c1d51f85c888a7b03c89c100b085a7b21f5e7
✅ Admin address correctly set
✅ Budget contract deployed successfully!
```

## Environment Variables

### Required Variables

- `STARKNET_ACCOUNT_ADDRESS` - Your StarkNet account address
- `STARKNET_PRIVATE_KEY` - Your account private key
- `STARKNET_NETWORK` - Network (testnet/mainnet)
- `ADMIN_ADDRESS` - Default admin address for contracts

### Optional Variables

- `BUDGET_ADMIN_ADDRESS` - Specific admin for Budget contract
- `MILESTONES_ADMIN_ADDRESS` - Specific admin for Milestones contract
- `EXPENSES_ADMIN_ADDRESS` - Specific admin for Expenses contract
- `GOALS_ADMIN_ADDRESS` - Specific admin for Goals contract
- `REPORTS_ADMIN_ADDRESS` - Specific admin for Reports contract
- `TRANSACTION_LEDGER_ADMIN_ADDRESS` - Specific admin for TransactionLedger contract
- `PROJECT_MANAGEMENT_ADMIN_ADDRESS` - Specific admin for ProjectManagement contract
- `ORGANIZATION_MANAGEMENT_ADMIN_ADDRESS` - Specific admin for OrganizationManagement contract

## Network Configuration

### Sepolia Testnet (Default)
- Node URL: `https://starknet-sepolia.public.blastapi.io/rpc/v0_8`
- Network: `testnet`

### Mainnet
- Node URL: `https://starknet-mainnet.public.blastapi.io/rpc/v0_8`
- Network: `mainnet`

## Troubleshooting

### Common Issues

1. **Contract Not Built**: Ensure contracts are compiled before deployment
2. **Insufficient Funds**: Check account balance for deployment fees
3. **Network Issues**: Verify network connectivity and node URL
4. **Invalid Addresses**: Ensure all addresses are valid StarkNet addresses

### Error Messages

- `Deployment failed: Insufficient balance` - Add funds to your account
- `Contract not found` - Build the contract first
- `Invalid constructor arguments` - Check environment variables

## Security Notes

- Never commit `.env` files to version control
- Use testnet for development and testing
- Verify all addresses before mainnet deployment
- Keep private keys secure and never share them

## File Structure

```
script/
├── package.json                           # Dependencies and scripts
├── env.example                            # Environment template
├── README.md                              # This file
├── deploy_budget.js                       # Budget contract deployment
├── deploy_milestones.js                   # Milestones contract deployment
├── deploy_expenses.js                     # Expenses contract deployment
├── deploy_goals.js                        # Goals contract deployment
├── deploy_reports.js                      # Reports contract deployment
├── deploy_transaction_ledger.js           # TransactionLedger deployment
├── deploy_project_management.js           # ProjectManagement deployment
├── deploy_organization_management.js     # OrganizationManagement deployment
├── deploy_all.js                          # Batch deployment script
├── budget_deployment.json                 # Budget deployment details
├── milestones_deployment.json             # Milestones deployment details
├── expenses_deployment.json               # Expenses deployment details
├── goals_deployment.json                  # Goals deployment details
├── reports_deployment.json                # Reports deployment details
├── transaction_ledger_deployment.json      # TransactionLedger details
├── project_management_deployment.json    # ProjectManagement details
├── organization_management_deployment.json # OrganizationManagement details
└── consolidated_deployment_report.json    # All deployments summary
```
