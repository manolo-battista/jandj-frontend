import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/icons/arrow-left-icon";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import StepperFooter from "@/components/pages/guest/_common/stepper-footer";
import React from "react";
import { useStepper } from "@/hooks/useStepper";
import Divider from "@/components/ui/divider";
import NeedSupport from "@/components/common/need-support";

export default function FillQiForm() {
  const { onPreviousStep, onNextStep } = useStepper();
  return (
    <div>
      <Typography variant="body-lg" className="text-center">
        In order to confirm your presence as a guest, we need you to fill and
        sign the QI form
      </Typography>

      <div className="mt-8 h-[800px] bg-[#525659]" />

      <StepperFooter
        message="Have you filled an signed the QI form?"
        action={
          <div className="flex gap-4">
            <Button
              startIcon={
                <div onClick={onPreviousStep}>
                  <ArrowLeftIcon />
                </div>
              }
              endIcon={
                <div onClick={onNextStep}>
                  <ArrowRightIcon />{" "}
                </div>
              }
            >
              Submit
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
