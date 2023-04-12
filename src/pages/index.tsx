import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { QRElem } from "@/components/qr";
import { useTransactionListener } from "@/lib/hooks";

const inter = Inter({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  const { data, isLoading } = useTransactionListener();

  return (
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
  );
}
