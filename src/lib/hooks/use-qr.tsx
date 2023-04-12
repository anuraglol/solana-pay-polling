import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { createQR } from "@solana/pay";

const useQR = (url: string) => {
  const ref = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["qr", url],
    queryFn: async () => {
      const qr = createQR(url, 220);

      if (ref.current) {
        ref.current.innerHTML = "";
      }

      const blob = await qr.getRawData("svg");

      const svg = new Blob([blob!], { type: "image/svg+xml" });
      const svgURL = URL.createObjectURL(svg);
      const img = new Image();
      img.src = svgURL;

      img.onload = () => {
        if (ref.current) {
          ref.current.appendChild(img);
        }
      };

      return qr;
    },
    enabled: !!url,
    onSuccess: () => {
      if (ref.current) {
        ref.current.innerHTML = "";
      }
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { ref, data, isLoading };
};

export { useQR };
