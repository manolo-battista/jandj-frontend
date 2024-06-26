"use client";
import React from "react";
import Stepper from "@/components/ui/stepper";
import { Typography } from "@/components/ui/typography";
import { useParams, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";

const steps = [
  { value: 0, label: "Confirm Participaton" },
  { value: 1, label: "Check CV" },
  { value: 2, label: "Fill QI form" },
  { value: 3, label: "Submit" },
];
export default function Page() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  return (
    <div className="p-40 py-8">
      <div className="p-6 flex flex-col items-center justify-center w-full">
        <Stepper active={Number(step) ?? 0} steps={steps} />
      </div>
      <div className="text-center">
        <Typography variant="heading-sm">Good Morning Mr. Urlich</Typography>
        <Typography variant="body-lg" className="mt-8">
          It is with great pleasure that we are looking forward to having you as
          a guest at our next event:
        </Typography>
      </div>
      <div className="mt-8 w-full bg-background-active p-12">
        <div className="grid grid-cols-12">
          <div className="col-span-4">image</div>
          <div className="col-span-8">
            <Typography variant="heading-card" color="red" className="mt-8">
              “New perspectives in multiple myeloma”
            </Typography>
            <Typography variant="body-lg" className="mt-8">
              Webinar to discuss the state of the art in the field of multiple
              myeloma, sharing new knowledge on the triage and therapy of
              patients affected by this pathology.
            </Typography>
          </div>
        </div>
      </div>

      <div className="mt-8 flex">
        <Typography variant="body-lg" className="flex-1">
          Please confirm your presence
        </Typography>
        <Button endIcon={<ArrowRightIcon />}>I&apos;m attending</Button>
      </div>
    </div>
  );
}
