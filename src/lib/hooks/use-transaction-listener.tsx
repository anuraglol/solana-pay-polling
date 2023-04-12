import { findReference } from "@solana/pay";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { reference } from "../constants";
import { useConnection } from "./use-connection";

const useTransactionListener = () => {
  const connection = useConnection();

  const { data, isLoading, isRefetchError } = useQuery({
    queryKey: ["transactionListener", reference.publicKey.toString()],
    queryFn: async () => {
      const signatureInfo = await findReference(
        connection,
        reference.publicKey,
        {
          finality: "confirmed",
        }
      );

      return signatureInfo.signature;
    },
    onSuccess: (data) => {
      if (z.string().safeParse(data!).success) {
        console.log("Transaction found!");
      }
    },
    onError: (error) => {
      console.log(error);
    },
    refetchOnWindowFocus: false,
    retry: false,
    refetchInterval: (d) => {
      if (z.string().safeParse(d!).success) {
        return false;
      }
      return 1000;
    },
  });

  return { data, isLoading, isRefetchError };
};

export { useTransactionListener };
