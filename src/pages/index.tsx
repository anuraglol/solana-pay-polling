import { QRElem } from "@/components/qr";
import { useTransactionListener, useUpdateData } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  const { mutateAsync } = useUpdateData();

  const { data, isLoading } = useTransactionListener(mutateAsync);

  return (
    <>
      <Toaster style={inter.style} richColors />
      <main
        className={cn(
          "flex min-h-screen w-full flex-col gap-4 items-center justify-center",
          inter.className
        )}
      >
        <h1 className="text-lg font-medium">
          Hello! Below is a Solana Pay QR Code
        </h1>

        <QRElem />
      </main>
    </>
  );
}
