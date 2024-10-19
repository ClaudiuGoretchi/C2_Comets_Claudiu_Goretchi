import {createMint, getOrCreateAssociatedTokenAccount, transfer} from "@solana/spl-token"
import "dotenv/config"
import {getKeypairFromEnvironment, getExplorerLink} from "@solana-developers/helpers"
import {Connection, clusterApiUrl, PublicKey} from "@solana/web3.js";

const AMOUNT = 2;
const DECIMALS = 6;
const connect = new Connection(clusterApiUrl("devnet"), "confirmed");
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log("User account loaded: " + user.publicKey.toBase58());

const tokenMint = new PublicKey("8UcmVp6kVERtUC84EFwPyzrU3mXypEd4GDfZ8A8NLC3");
const destPubKey = new PublicKey("6Ku5DtkCw7qCRvwQH4FEaBSkTftJdqjD1XYwNo4Yrppw");
// @ts-ignore
const destTokenAccount = await getOrCreateAssociatedTokenAccount(connect, user, tokenMint, destPubKey);

// @ts-ignore
const signature = await transfer(connect, user, tokenMint, destTokenAccount, user, AMOUNT * 10 ** DECIMALS);
const link = getExplorerLink("tx", signature, "devnet");

console.log("Transfered: " + AMOUNT + " to " + link);