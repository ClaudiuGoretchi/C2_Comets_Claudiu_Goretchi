import "dotenv/config"
import {Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl} from "@solana/web3.js";
import { airdropIfRequired} from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));
console.log('Connected to devnet');

const publicKey = new PublicKey("6Ku5DtkCw7qCRvwQH4FEaBSkTftJdqjD1XYwNo4Yrppw");
// @ts-ignore
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log('Finished! Balance for address ' + publicKey + ' is ' + balanceInLamports + " Lamports");
console.log('Finished! Balance for address ' + publicKey + ' is ' + balanceInSOL + " SOL");

console.log('Airdropping 1 SOL');

// @ts-ignore
// await airdropIfRequired(
//     connection,
//     publicKey,
//     LAMPORTS_PER_SOL,
//     0.5 * LAMPORTS_PER_SOL
// );

// @ts-ignore
const balanceInLamportsAfter = await connection.getBalance(publicKey);
console.log('Finished! Balance for address ' + publicKey + ' is ' + balanceInLamportsAfter + " Lamports");
console.log('Finished! Balance for address ' + publicKey + ' is ' + balanceInLamportsAfter / LAMPORTS_PER_SOL + " SOL");

