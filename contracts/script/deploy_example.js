import { RpcProvider, Account, Contract, json, CallData } from 'starknet';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

async function main() {
  // 1. --- Connect to Starknet Provider ---
  const nodeUrl = process.env.STARKNET_NETWORK === 'mainnet' 
    ? process.env.MAINNET_NODE_URL 
    : process.env.SEPOLIA_NODE_URL;
  
  const provider = new RpcProvider({ nodeUrl });

  // 2. --- Connect to your Account ---
  const privateKey = process.env.STARKNET_PRIVATE_KEY;
  const accountAddress = process.env.STARKNET_ACCOUNT_ADDRESS;
  const account = new Account(provider, accountAddress, privateKey);
  console.log('Connected to account:', account.address);

  // 3. --- Load Compiled Contract Artifacts ---
  const compiledSierra = json.parse(
    fs.readFileSync('../example/target/dev/example_HelloStarknet.contract_class.json').toString('ascii')
  );
  const compiledCasm = json.parse(
    fs.readFileSync('../example/target/dev/example_HelloStarknet.compiled_contract_class.json').toString('ascii')
  );

  // 4. --- Prepare Constructor Arguments ---
  // This contract doesn't have a constructor, so we pass empty array
  const constructorArgs = [];

  console.log('Constructor Arguments:', constructorArgs);

  // 5. --- Declare and Deploy the Contract ---
  console.log('Declaring and deploying Example contract...');
  try {
    const deployResponse = await account.declareAndDeploy({
      contract: compiledSierra,
      casm: compiledCasm,
      constructorCalldata: constructorArgs,
    });

    console.log('Contract declared with class hash:', deployResponse.declare.class_hash);
    console.log('Contract deployed at address:', deployResponse.deploy.contract_address);

    // 6. --- Connect to the Deployed Contract ---
    const myContract = new Contract(
      compiledSierra.abi,
      deployResponse.deploy.contract_address,
      provider
    );

    console.log('✅ Example contract connected successfully!');

    // 7. --- Write deployment summary ---
    const summary = {
      network: process.env.STARKNET_NETWORK || 'sepolia',
      account: account.address,
      contractName: 'Example',
      classHash: deployResponse.declare.class_hash,
      contractAddress: deployResponse.deploy.contract_address,
      tx: {
        declare: deployResponse.declare.transaction_hash,
        deploy: deployResponse.deploy.transaction_hash,
      },
      constructorArgs,
      timestamp: new Date().toISOString(),
    };

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const outPath = path.join(__dirname, 'example_deployment.json');
    try {
      fs.writeFileSync(outPath, JSON.stringify(summary, null, 2));
      console.log('Saved deployment summary to', outPath);
    } catch (e) {
      console.warn('Could not write example_deployment.json:', e);
    }

    // 8. --- Test basic functionality ---
    console.log('\n--- Testing Example Contract ---');
    try {
      // Test initial balance
      const initialBalance = await myContract.get_balance();
      console.log('Initial balance:', initialBalance.toString());
      
      // Test increasing balance
      console.log('Increasing balance by 100...');
      await myContract.increase_balance(100);
      
      // Check new balance
      const newBalance = await myContract.get_balance();
      console.log('New balance:', newBalance.toString());
      
      if (newBalance.toString() === '100') {
        console.log('✅ Contract functionality working correctly!');
      } else {
        console.log('❌ Contract functionality test failed');
      }
      
    } catch (error) {
      console.log('⚠️  Could not test contract functionality:', error.message);
    }

  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  }
}

main().catch(console.error);
