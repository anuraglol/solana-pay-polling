import { useMutation } from "@tanstack/react-query";
import { useConnection } from "./use-connection";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const useUpdateData = () => {
  const connection = useConnection();

  const { mutate, isLoading, mutateAsync } = useMutation({
    mutationKey: ["updateData"],
    mutationFn: async (signature: string) => {
      delay(2000);
      const transactionData = await connection.getTransaction(signature);

      return transactionData;
    },
    onSuccess: async (data) => {},
    onError: (error) => {},
  });

  return { mutate, isLoading, mutateAsync };
};

export { useUpdateData };
