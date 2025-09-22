# BudgetChain Smart Contracts

Individual Cairo smart contracts for the BudgetChain decentralized financial management system.

## Overview

This directory contains individual, standalone smart contracts that power BudgetChain's decentralized budgeting functionality. Each contract is independently deployable and handles a specific aspect of financial management. Built using Cairo and designed for StarkNet, these contracts provide secure, gas-efficient solutions that can be used alone or in combination.

**Note**: Notifications and alerts are handled off-chain through the application layer, not as on-chain smart contracts. This approach is more cost-effective and flexible for user notifications.

## Project Structure

```
contracts/
├── README.md
├── Budget/             # Budget management contract
│   ├── Scarb.toml      # Contract configuration
│   ├── src/
│   │   ├── lib.cairo   # Library entry point
│   │   └── budget.cairo # Main contract implementation
│   └── tests/
│       └── test_budget.cairo
├── Milestones/         # Milestone tracking contract
│   ├── Scarb.toml
│   ├── src/
│   │   ├── lib.cairo
│   │   └── milestones.cairo
│   └── tests/
│       └── test_milestones.cairo
├── Expenses/           # Expense tracking contract
│   ├── Scarb.toml
│   ├── src/
│   │   ├── lib.cairo
│   │   └── expenses.cairo
│   └── tests/
│       └── test_expenses.cairo
├── Goals/              # Financial goals contract
│   ├── Scarb.toml
│   ├── src/
│   │   ├── lib.cairo
│   │   └── goals.cairo
│   └── tests/
│       └── test_goals.cairo
├── Reports/            # Reporting and analytics contract
│   ├── Scarb.toml
│   ├── src/
│   │   ├── lib.cairo
│   │   └── reports.cairo
│   └── tests/
│       └── test_reports.cairo
├── TransactionLedger/  # Transaction ledger contract
│   ├── Scarb.toml
│   ├── src/
│   │   ├── lib.cairo
│   │   └── transaction_ledger.cairo
│   └── tests/
│       └── test_transaction_ledger.cairo
├── ProjectManagement/  # Project management contract
│   ├── Scarb.toml
│   ├── src/
│   │   ├── lib.cairo
│   │   └── project_management.cairo
│   └── tests/
│       └── test_project_management.cairo
└── OrganizationManagement/ # Organization management contract
    ├── Scarb.toml
    ├── src/
    │   ├── lib.cairo
    │   └── organization_management.cairo
    └── tests/
        └── test_organization_management.cairo
```

## Individual Contracts

### Budget Contract (`Budget/`)

**Purpose**: Create, manage, and track budgets with category-based allocations.

**Key Features:**
- Create and manage budget allocations
- Track spending against budget limits
- Transfer funds between budget categories
- Role-based access control
- Event logging for transparency

**Core Functions:**
- `create_budget()` - Create a new budget with specified categories
- `allocate_funds()` - Allocate funds to specific budget categories
- `spend_from_category()` - Record spending from a budget category
- `transfer_between_categories()` - Move funds between categories
- `get_budget_status()` - Query current budget status

### Milestones Contract (`Milestones/`)

**Purpose**: Track project milestones, deadlines, and progress.

**Key Features:**
- Create and define project milestones
- Track milestone completion status
- Set deadlines and reminders
- Progress reporting and analytics
- Integration with budget tracking

**Core Functions:**
- `create_milestone()` - Create a new project milestone
- `update_milestone_status()` - Mark milestone as completed/in-progress
- `set_milestone_deadline()` - Set or update milestone deadline
- `get_milestone_progress()` - Query milestone completion status
- `get_all_milestones()` - Retrieve all project milestones

### Expenses Contract (`Expenses/`)

**Purpose**: Record, categorize, and track individual expenses.

**Key Features:**
- Record individual expenses with categories
- Expense categorization and tagging
- Receipt and documentation tracking
- Expense reporting and analytics
- Integration with budget monitoring

**Core Functions:**
- `record_expense()` - Record a new expense
- `categorize_expense()` - Assign category to expense
- `get_expense_history()` - Retrieve expense records
- `get_expenses_by_category()` - Filter expenses by category
- `update_expense()` - Modify existing expense records

### Goals Contract (`Goals/`)

**Purpose**: Set, track, and monitor financial goals and objectives.

**Key Features:**
- Create short and long-term financial goals
- Track progress towards goals
- Goal-based budget recommendations
- Achievement notifications
- Progress visualization

**Core Functions:**
- `create_goal()` - Create a new financial goal
- `update_goal_progress()` - Update goal completion status
- `get_goal_status()` - Query current goal progress
- `recommend_budget_allocation()` - Suggest budget adjustments for goals
- `get_all_goals()` - Retrieve all user goals

### Reports Contract (`Reports/`)

**Purpose**: Generate financial reports, analytics, and insights.

**Key Features:**
- Generate comprehensive financial reports
- Budget vs actual spending analysis
- Trend analysis and forecasting
- Custom report generation
- Data export capabilities

**Core Functions:**
- `generate_budget_report()` - Create budget performance report
- `generate_expense_report()` - Create expense analysis report
- `generate_goal_progress_report()` - Create goal achievement report
- `get_financial_summary()` - Get overall financial status
- `export_data()` - Export data in various formats

### Transaction Ledger Contract (`TransactionLedger/`)

**Purpose**: Record, track, and manage all financial transactions across the platform.

**Key Features:**
- Record all financial transactions with detailed metadata
- Track transaction history and audit trails
- Support multiple transaction types (income, expense, transfer)
- Transaction categorization and tagging
- Integration with budget and expense tracking

**Core Functions:**
- `record_transaction()` - Record a new financial transaction
- `get_transaction_history()` - Retrieve transaction history
- `categorize_transaction()` - Assign category to transaction
- `get_transactions_by_type()` - Filter transactions by type
- `update_transaction()` - Modify existing transaction records
- `get_transaction_summary()` - Get transaction statistics

### Project Management Contract (`ProjectManagement/`)

**Purpose**: Manage projects, tasks, team collaboration, and project-related financial tracking.

**Key Features:**
- Create and manage projects with budgets
- Task assignment and progress tracking
- Team member management and permissions
- Project timeline and milestone integration
- Resource allocation and tracking

**Core Functions:**
- `create_project()` - Create a new project
- `assign_task()` - Assign tasks to team members
- `update_task_status()` - Update task completion status
- `add_team_member()` - Add members to project team
- `get_project_status()` - Get project progress and status
- `allocate_resources()` - Allocate budget to project resources

### Organization Management Contract (`OrganizationManagement/`)

**Purpose**: Handle organizational structure, user roles, permissions, and access control.

**Key Features:**
- Create and manage organizations
- Role-based access control (RBAC)
- User permission management
- Department and team structure
- Organization-wide settings and policies

**Core Functions:**
- `create_organization()` - Create a new organization
- `add_member()` - Add members to organization
- `assign_role()` - Assign roles to organization members
- `update_permissions()` - Modify user permissions
- `get_organization_structure()` - Get org hierarchy
- `set_organization_policy()` - Configure org-wide policies

## Prerequisites

- [Scarb](https://docs.swmansion.com/scarb/) - Cairo package manager
- [SNFoundry](https://foundry-rs.github.io/starknet-foundry/) - Testing framework
- [StarkNet](https://starknet.io/) - Target blockchain platform

## Installation

1. Ensure Scarb is installed:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh
```

2. Install SNFoundry for testing:
```bash
curl -L https://raw.githubusercontent.com/foundry-rs/starknet-foundry/master/scripts/install.sh | sh
```

## Development

### Working with Individual Contracts

Each contract is independent and can be developed, built, and tested separately:

#### Building a Specific Contract

```bash
cd Budget
scarb build
```

#### Testing a Specific Contract

```bash
cd Budget
snforge test
```

#### Building All Contracts

```bash
# Build each contract individually
for contract in Budget Milestones Expenses Goals Reports TransactionLedger ProjectManagement OrganizationManagement; do
    echo "Building $contract..."
    cd $contract && scarb build && cd ..
done
```

#### Testing All Contracts

```bash
# Test each contract individually
for contract in Budget Milestones Expenses Goals Reports TransactionLedger ProjectManagement OrganizationManagement; do
    echo "Testing $contract..."
    cd $contract && snforge test && cd ..
done
```

### Code Quality

Format code for a specific contract:
```bash
cd Budget
scarb fmt
```

Check for issues in a specific contract:
```bash
cd Budget
scarb check
```

## Contract Architecture

### Security Features

- **Access Control**: Role-based permissions for budget management
- **Input Validation**: Comprehensive validation of all inputs
- **Overflow Protection**: Safe arithmetic operations
- **Event Logging**: Transparent operation tracking

### Gas Optimization

- Efficient storage patterns
- Minimal external calls
- Optimized data structures
- Batch operations where possible

## Testing Strategy

The test suite covers:

- **Unit Tests**: Individual function testing
- **Integration Tests**: Contract interaction testing
- **Edge Cases**: Boundary condition testing
- **Security Tests**: Access control and validation testing
- **Gas Tests**: Performance and cost optimization

## Deployment

Each contract can be deployed independently:

### Deploying a Specific Contract

#### Local Development

```bash
# Start local StarkNet node
starknet-devnet --seed 0

# Deploy specific contract
cd Budget
starknet deploy --network localhost
```

#### Testnet Deployment

```bash
cd Budget
starknet deploy --network testnet
```

#### Mainnet Deployment

```bash
cd Budget
starknet deploy --network mainnet
```

### Deploying All Contracts

```bash
# Deploy each contract individually
for contract in Budget Milestones Expenses Goals Reports TransactionLedger ProjectManagement OrganizationManagement; do
    echo "Deploying $contract..."
    cd $contract
    starknet deploy --network testnet
    cd ..
done
```

## API Reference

Each contract has its own API. Here are the key functions for each:

### Budget Contract (`Budget/`)

#### Core Functions
- `create_budget(name: felt252, categories: Array<felt252>) -> u256`
- `allocate_funds(budget_id: u256, category: felt252, amount: u256)`
- `spend_from_category(budget_id: u256, category: felt252, amount: u256)`
- `get_budget_status(budget_id: u256) -> (total_allocated: u256, total_spent: u256)`

#### Events
- `BudgetCreated(budget_id: u256, owner: ContractAddress, name: felt252)`
- `FundsAllocated(budget_id: u256, category: felt252, amount: u256)`
- `SpendingRecorded(budget_id: u256, category: felt252, amount: u256)`

### Milestones Contract (`Milestones/`)

#### Core Functions
- `create_milestone(name: felt252, description: felt252, deadline: u256) -> u256`
- `update_milestone_status(milestone_id: u256, status: u8)`
- `set_milestone_deadline(milestone_id: u256, deadline: u256)`
- `get_milestone_progress(milestone_id: u256) -> (status: u8, progress: u256)`

#### Events
- `MilestoneCreated(milestone_id: u256, name: felt252, deadline: u256)`
- `MilestoneStatusUpdated(milestone_id: u256, status: u8)`
- `MilestoneDeadlineUpdated(milestone_id: u256, deadline: u256)`

### Expenses Contract (`Expenses/`)

#### Core Functions
- `record_expense(amount: u256, category: felt252, description: felt252) -> u256`
- `categorize_expense(expense_id: u256, category: felt252)`
- `get_expense_history(limit: u256) -> Array<Expense>`
- `get_expenses_by_category(category: felt252) -> Array<Expense>`

#### Events
- `ExpenseRecorded(expense_id: u256, amount: u256, category: felt252)`
- `ExpenseCategorized(expense_id: u256, category: felt252)`

### Goals Contract (`Goals/`)

#### Core Functions
- `create_goal(name: felt252, target_amount: u256, deadline: u256) -> u256`
- `update_goal_progress(goal_id: u256, progress: u256)`
- `get_goal_status(goal_id: u256) -> (progress: u256, target: u256, deadline: u256)`
- `recommend_budget_allocation(goal_id: u256) -> Array<BudgetRecommendation>`

#### Events
- `GoalCreated(goal_id: u256, name: felt252, target_amount: u256)`
- `GoalProgressUpdated(goal_id: u256, progress: u256)`
- `GoalAchieved(goal_id: u256)`

### Reports Contract (`Reports/`)

#### Core Functions
- `generate_budget_report(budget_id: u256) -> BudgetReport`
- `generate_expense_report(start_date: u256, end_date: u256) -> ExpenseReport`
- `get_financial_summary() -> FinancialSummary`
- `export_data(format: u8) -> Array<u8>`

#### Events
- `ReportGenerated(report_id: u256, report_type: u8)`
- `DataExported(export_id: u256, format: u8)`

### Transaction Ledger Contract (`TransactionLedger/`)

#### Core Functions
- `record_transaction(amount: u256, transaction_type: u8, description: felt252) -> u256`
- `get_transaction_history(limit: u256) -> Array<Transaction>`
- `categorize_transaction(transaction_id: u256, category: felt252)`
- `get_transactions_by_type(transaction_type: u8) -> Array<Transaction>`
- `get_transaction_summary() -> TransactionSummary`

#### Events
- `TransactionRecorded(transaction_id: u256, amount: u256, transaction_type: u8)`
- `TransactionCategorized(transaction_id: u256, category: felt252)`
- `TransactionUpdated(transaction_id: u256, changes: felt252)`

### Project Management Contract (`ProjectManagement/`)

#### Core Functions
- `create_project(name: felt252, budget: u256, deadline: u256) -> u256`
- `assign_task(project_id: u256, task_name: felt252, assignee: ContractAddress) -> u256`
- `update_task_status(task_id: u256, status: u8)`
- `add_team_member(project_id: u256, member: ContractAddress, role: u8)`
- `get_project_status(project_id: u256) -> ProjectStatus`
- `allocate_resources(project_id: u256, resource_type: felt252, amount: u256)`

#### Events
- `ProjectCreated(project_id: u256, name: felt252, budget: u256)`
- `TaskAssigned(task_id: u256, project_id: u256, assignee: ContractAddress)`
- `TaskStatusUpdated(task_id: u256, status: u8)`
- `TeamMemberAdded(project_id: u256, member: ContractAddress, role: u8)`

### Organization Management Contract (`OrganizationManagement/`)

#### Core Functions
- `create_organization(name: felt252, owner: ContractAddress) -> u256`
- `add_member(org_id: u256, member: ContractAddress)`
- `assign_role(org_id: u256, member: ContractAddress, role: u8)`
- `update_permissions(member: ContractAddress, permissions: Array<u8>)`
- `get_organization_structure(org_id: u256) -> OrganizationStructure`
- `set_organization_policy(org_id: u256, policy_type: u8, policy_data: felt252)`

#### Events
- `OrganizationCreated(org_id: u256, name: felt252, owner: ContractAddress)`
- `MemberAdded(org_id: u256, member: ContractAddress)`
- `RoleAssigned(org_id: u256, member: ContractAddress, role: u8)`
- `PermissionsUpdated(member: ContractAddress, permissions: Array<u8>)`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Security

For security concerns, please contact the development team directly or open a private issue.

---

**Note**: These contracts are in active development. Always test thoroughly before using in production.
