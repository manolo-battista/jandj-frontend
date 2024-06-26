import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import Divider from "@/components/ui/divider";
import NeedSupport from "@/components/common/need-support";
import React from "react";
import StepperFooter from "@/components/pages/guest/_common/stepper-footer";

export default function ConfirmParticipation() {
  return (
    <>
      <div className="text-center">
        <Typography variant="heading-sm">Good Morning Mr. Urlich</Typography>
        <Typography variant="body-lg" className="mt-8">
          It is with great pleasure that we are looking forward to having you as
          a guest at our next event:
        </Typography>
      </div>
      <div className="mt-8 w-full bg-background-active p-12">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4">image</div>
          <div className="md:col-span-8">
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

      <StepperFooter
        message="Please confirm your presence"
        action={
          <Button endIcon={<ArrowRightIcon />}>I&apos;m attending</Button>
        }
      />

      <Divider />

      <div className="mt-8 flex justify-center">
        <NeedSupport />
      </div>
    </>
  );
}
