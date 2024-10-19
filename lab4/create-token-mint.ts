import {createMint} from "@solana/spl-token"
import "dotenv/config"
import {getKeypairFromEnvironment, getExplorerLink} from "@solana-developers/helpers"
import {Connection, clusterApiUrl} from "@solana/web3.js";

const DECIMALS = 6;
const connect = new Connection(clusterApiUrl("devnet"), "confirmed");
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log("User loaded " + user.publicKey.toBase58());

// @ts-ignore
const tokenMint = await createMint(connect, user, user.publicKey, null, DECIMALS);
const link = getExplorerLink("address", tokenMint.toBase58(), "devnet")

console.log("Token mint created: " + link);