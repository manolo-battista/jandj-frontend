import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import GuestPage from "@/components/pages/guest/GuestPage";

export default function Page() {
  // TODO: implement expired logic
  const hasExpired = false;

  if (hasExpired) {
    redirect("/guest/expired");
  }
  return (
    <Suspense>
      <GuestPage />
    </Suspense>
  );
}
