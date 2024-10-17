import "dotenv/config"
// import * as dotenv from 'dotenv'
// dotenv.config({ path: '../.env'})
import {getKeypairFromEnvironment} from "@solana-developers/helpers";

const loadKeypair = getKeypairFromEnvironment("SECRET_KEY")

console.log('Public keypair: ', loadKeypair.publicKey.toBase58());
console.log('Secret keypair: ', loadKeypair.secretKey);
console.log('Loaded keypair')