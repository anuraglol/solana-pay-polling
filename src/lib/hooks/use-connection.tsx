import { Connection } from "@solana/web3.js";

const useConnection = () => {
  const connection = new Connection(process.env.NEXT_PUBLIC_MAINNET_RPC!, {
    commitment: "confirmed",
  });

  return connection;
};

export { useConnection };
