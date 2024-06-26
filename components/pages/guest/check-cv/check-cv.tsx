import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import React from "react";
import StepperFooter from "@/components/pages/guest/_common/stepper-footer";
import { ArrowLeftIcon } from "@/components/icons/arrow-left-icon";

export default function CheckCv() {
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

      <StepperFooter
        message="Is this the most updated version?"
        action={
          <div className="flex gap-4">
            <Button variant="outlined" startIcon={<ArrowLeftIcon />}>
              I need to upload a new version
            </Button>
            <Button startIcon={<ArrowLeftIcon />} endIcon={<ArrowRightIcon />}>
              This CV is correct
            </Button>
          </div>
        }
      />
    </div>
  );
}
