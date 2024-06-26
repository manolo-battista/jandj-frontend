import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import React from "react";
import StepperFooter from "@/components/pages/guest/_common/stepper-footer";
import { ArrowLeftIcon } from "@/components/icons/arrow-left-icon";
import { useStepper } from "@/hooks/useStepper";
import Divider from "@/components/ui/divider";
import NeedSupport from "@/components/common/need-support";

export default function CheckCv() {
  const { onPreviousStep, onNextStep } = useStepper();
  return (
    <div>
      <Typography variant="body-lg" className="text-center">
        It In order to confirm your presence as a guest, we need you to confirm
        that your CV in our databases corresponds to the most updated version of
        your work experience.
        <br />
        <br />
        Please review the document below and kindly confirm that this is the
        correct version.
      </Typography>

      <div className="mt-8 h-[800px] bg-[#525659]" />

      <StepperFooter
        message="Is this the most updated version?"
        action={
          <div className="flex gap-4">
            <Button variant="outlined" startIcon={<ArrowLeftIcon />}>
              I need to upload a new version
            </Button>
            <Button
              startIcon={
                <div onClick={onPreviousStep}>
                  <ArrowLeftIcon />
                </div>
              }
              endIcon={
                <div onClick={onNextStep}>
                  <ArrowRightIcon />
                </div>
              }
            >
              This CV is correct
            </Button>
          </div>
        }
      />

      <Divider />
      <div className="mt-8 flex justify-center">
        <NeedSupport />
      </div>
    </div>
  );
}
