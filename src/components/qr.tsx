import { amount, merchant, reference } from "@/lib/constants";
import { useQR } from "@/lib/hooks";
import { FC, useMemo } from "react";
import { LoaderIcon } from "./icons";

const QRElem: FC = ({}) => {
  const url = useMemo(() => {
    return `solana:${merchant.wallet_address}?amount=${amount}&label=Paying%20${merchant.name}&reference=${reference.publicKey}`;
  }, []);

  const { ref, isLoading } = useQR(url);

  return (
    <div className="rounded-md bg-neutral-50 border border-neutral-300/50 grid place-items-center w-64 h-64">
      {isLoading ? (
        <LoaderIcon className="animate-spin w-8 h-8 text-purple-500" />
      ) : (
        <div ref={ref} />
      )}
    </div>
  );
};

export { QRElem };
