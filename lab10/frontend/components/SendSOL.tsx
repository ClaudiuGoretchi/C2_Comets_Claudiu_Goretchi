import React from "react";
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const SendSOL = () => {
    const [amount, setAmount] = React.useState<number>(0);
    const [recipient, setRecipient] = React.useState<string>("");
    const { connection } = useConnection();
    const { publicKey, signTransaction, sendTransaction } = useWallet();

    const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(event.target.value));
    };

    const handleChangeRecipient = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRecipient(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("amount", amount);
        console.log("recipient", recipient);
        if (!connection || !publicKey) {
            console.error("Wallet unavailable");
            return;
        }

        const tx = new Transaction();
        const instruction = SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(recipient),
            lamports: amount * LAMPORTS_PER_SOL,
        });
        tx.add(instruction);
        const blockhash = await connection.getLatestBlockhash();
        tx.recentBlockhash = blockhash.blockhash;
        tx.feePayer = publicKey;

        const signedTransaction = await signTransaction(tx);

        const sig = await sendTransaction(signedTransaction, connection);

        console.log("Successful sent tx with signature: ", sig);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    onChange={handleChangeAmount}
                />
                <br />
                <label htmlFor="recipient">Recipient:</label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    onChange={handleChangeRecipient}
                />
                <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default SendSOL;