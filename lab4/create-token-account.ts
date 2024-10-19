import {createMint, getOrCreateAssociatedTokenAccount} from "@solana/spl-token"
import "dotenv/config"
import {getKeypairFromEnvironment, getExplorerLink} from "@solana-developers/helpers"
import {Connection, clusterApiUrl, PublicKey} from "@solana/web3.js";

const connect = new Connection(clusterApiUrl("devnet"), "confirmed");
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log("User account loaded: " + user.publicKey.toBase58());

const tokenMint = new PublicKey("8UcmVp6kVERtUC84EFwPyzrU3mXypEd4GDfZ8A8NLC3");
const destPubKey = new PublicKey("6Ku5DtkCw7qCRvwQH4FEaBSkTftJdqjD1XYwNo4Yrppw");

// @ts-ignore
const destTokenAccount = await getOrCreateAssociatedTokenAccount(connect, user, tokenMint, destPubKey);

console.log("Token account created: " + destTokenAccount.address.toBase58());
