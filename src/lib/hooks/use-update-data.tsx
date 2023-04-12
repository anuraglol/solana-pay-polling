import { useMutation, useQuery } from "@tanstack/react-query";

const useUpdateData = (signature: string | undefined) => {
  const { mutate, isLoading } = useMutation({
    mutationKey: ["updateData", signature],
    mutationFn: async () => {},
    onSuccess: (data) => {},
  });

  return { mutate, isLoading };
};

export { useUpdateData };
