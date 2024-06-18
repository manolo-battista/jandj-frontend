"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-4">
      <h1
        className={cn(
          `text-tertiary py-4 text-6xl font-semibold max-md:text-center max-sm:text-xl md:py-0`,
        )}
      >
        404 - Pagina non trovata
      </h1>
      <p className="mb-4 text-neutral w-1/2 text-center">
        La pagina che stai cercando potrebbe essere smarrita o rimossa per
        manutenzione.
      </p>
      <Button type="submit" onClick={() => router.push("/")}>
        Torna alla home
      </Button>
    </div>
  );
}
