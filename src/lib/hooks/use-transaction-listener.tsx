import { findReference } from "@solana/pay";
import { UseMutateAsyncFunction, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { reference } from "../constants";
import { useConnection } from "./use-connection";
import { TransactionResponse } from "@solana/web3.js";

const useTransactionListener = (
  callbackFn?: UseMutateAsyncFunction<
    TransactionResponse | null,
    unknown,
    string,
    unknown
  >
) => {
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
        if (callbackFn) {
          toast.promise(callbackFn(data), {
            loading: "Loading...",
            success: "Success!",
            error: "Error!",
          });
        }
      }
    },
    onError: (error) => {},
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: true,
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
