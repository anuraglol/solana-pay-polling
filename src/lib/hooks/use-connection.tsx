import { Connection } from "@solana/web3.js";

const useConnection = () => {
  const connection = new Connection(
    "https://rpc-devnet.helius.xyz/?api-key=bacd4e64-46e5-4e39-9e55-1970e5836e59",
    {
      commitment: "confirmed",
    }
  );

  return connection;
};

export { useConnection };
