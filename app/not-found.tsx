"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Typography } from "@/components/ui/typography";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-4">
      <Typography
        variant="heading-lg"
        className={cn(
          `text-tertiary py-4 font-semibold max-md:text-center max-sm:text-xl md:py-0`,
        )}
      >
        404 - Pagina non trovata
      </Typography>
      <Typography className="mb-4 w-1/2 text-center">
        La pagina che stai cercando potrebbe essere smarrita o rimossa per
        manutenzione.
      </Typography>
      <Button type="submit" onClick={() => router.push("/")}>
        Torna alla home
      </Button>
    </div>
  );
}
