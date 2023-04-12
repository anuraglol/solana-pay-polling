import { Keypair } from "@solana/web3.js";

const merchant = {
  wallet_address: "6siNkftMqXDrhdEHde1sHSKVt19Q5UNfk5C9jjgGJWw5",
  name: "Anurag",
};

const amount = 0.1;
const reference = Keypair.generate();

export { merchant, reference, amount };
