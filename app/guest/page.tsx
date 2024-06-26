"use client";
import React from "react";
import ConfirmParticipation from "@/components/pages/guest/confirm-participation/confirm-participation";
import CheckCv from "@/components/pages/guest/check-cv/check-cv";
import FillQiForm from "@/components/pages/guest/fill-qi-form/fill-qi-form";
import Submit from "@/components/pages/guest/submit/submit";
import { useStepper } from "@/hooks/useStepper";

export default function Page() {
  const { active } = useStepper();
  return (
    <>
      {(active.name == "confirm-participation" || active.value == 0) && (
        <ConfirmParticipation />
      )}
      {(active.name == "check-cv" || active.value == 1) && <CheckCv />}
      {(active.name == "fill-qi-form" || active.value == 2) && <FillQiForm />}
      {(active.name == "submit" || active.value == 3) && <Submit />}
    </>
  );
}
