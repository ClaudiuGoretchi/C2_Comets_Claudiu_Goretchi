import "dotenv/config"
import {getKeypairFromEnvironment, getExplorerLink} from "@solana-developers/helpers"
import {Connection, clusterApiUrl, PublicKey} from "@solana/web3.js";
import {mintTo} from "@solana/spl-token";

const AMOUNT = 9;
const DECIMALS = 6;
const connect = new Connection(clusterApiUrl("devnet"), "confirmed");
const user = getKeypairFromEnvironment("SECRET_KEY");
const tokenMint = new PublicKey("8UcmVp6kVERtUC84EFwPyzrU3mXypEd4GDfZ8A8NLC3");

const destTokenAccount = new PublicKey("6Ku5DtkCw7qCRvwQH4FEaBSkTftJdqjD1XYwNo4Yrppw");

// @ts-ignore
const signature = await mintTo(connect, user, tokenMint, destTokenAccount, user, AMOUNT * 10 ** DECIMALS);
const link = getExplorerLink("tx", signature, "devnet");

console.log("Minted: " + AMOUNT + " to " + link);