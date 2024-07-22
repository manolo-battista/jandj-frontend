import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import NeedSupport from "@/components/common/need-support";
import React from "react";
import StepperFooter from "@/components/pages/guest/_common/stepper-footer";
import { useStepper } from "@/hooks/use-stepper";
import Icon from "@/components/ui/icon";

export default function ConfirmParticipation() {
  const { onNextStep } = useStepper();
  return (
    <>
      <div className="text-center">
        <Typography variant="heading-sm">Good Morning Mr. Urlich</Typography>
        <Typography variant="body-lg" className="mt-8">
          It is with great pleasure that we are looking forward to having you as
          a guest at our next event:
        </Typography>
      </div>
      <div className="mt-8 w-full bg-background-active p-4">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="order-1 md:order-none md:col-span-2">
            <div className="hidden h-[200px] bg-[#525659]" />
            <div className="flex justify-center md:hidden">
              <Button
                variant="outlined"
                startIcon={<Icon.Download className="mr-2" />}
              >
                Download program
              </Button>
            </div>
          </div>
          <div className="md:col-span-10">
            <Typography
              variant="heading-card"
              color="red"
              className="text-center md:text-left"
            >
              “New perspectives in multiple myeloma”
            </Typography>
            <Typography
              variant="body-lg"
              className="mt-6 text-center md:text-left"
            >
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
          <Button onClick={onNextStep} endIcon={<Icon.ArrowRight />}>
            I&apos;m attending
          </Button>
        }
      />

      <Divider className="my-6 hidden md:block" />
      <div className="mt-4 flex justify-center md:mt-0">
        <NeedSupport />
      </div>
    </>
  );
}
