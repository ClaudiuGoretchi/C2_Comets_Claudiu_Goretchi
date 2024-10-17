import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    Transaction,
    clusterApiUrl,
    Connection,
    sendAndConfirmTransaction,
    SystemProgram,
} from "@solana/web3.js";
import { createMemoInstruction } from "@solana/spl-memo";

const sender = getKeypairFromEnvironment("SECRET_KEY");
const connection = new Connection(clusterApiUrl("devnet"));

console.log("Connected to devnet", sender.publicKey.toString());

const receiver = new PublicKey("Hg7QXrvrmsrEZ4vZDPSvghtTY9wRDsM6obRfpJTHFLAo");
const transaction = new Transaction();

const amount = 0.1;

const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: amount * LAMPORTS_PER_SOL,
});
transaction.add(transferInstruction);
// @ts-ignore
const signature = await sendAndConfirmTransaction(connection, transaction, [sender])

const addMemoInstruction = createMemoInstruction("Hello from Solana");
transaction.add(addMemoInstruction);

console.log("Transaction confirmed!", signature);
