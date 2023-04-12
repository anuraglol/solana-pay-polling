import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { QRElem } from "@/components/qr";
import { useTransactionListener } from "@/lib/hooks";
import { Toaster } from "sonner";
import { useUpdateData } from "@/lib/hooks/use-update-data";

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
