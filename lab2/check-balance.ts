import "dotenv/config"
import {Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log('Connected to devnet');

const publicKey = new PublicKey("6Ku5DtkCw7qCRvwQH4FEaBSkTftJdqjD1XYwNo4Yrppw");
// @ts-ignore
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log('Finished! Balance for address ' + publicKey + ' is ' + balanceInSOL + " SOL");