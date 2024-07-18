import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import StepperFooter from "@/components/pages/guest/_common/stepper-footer";
import { useStepper } from "@/hooks/use-stepper";
import Divider from "@/components/ui/divider";
import NeedSupport from "@/components/common/need-support";
import Icon from "@/components/ui/icon";
import { BottomDrawer } from "@/components/common/bottom-drawer";
import useMobile from "@/hooks/use-mobile";
import UploadCv from "@/components/pages/guest/check-cv/upload-cv";
import { UploadDocumentDialog } from "@/components/common/upload-document-dialog";
import SuccessUploadCv from "@/components/pages/guest/check-cv/success-upload-cv";

export default function CheckCv() {
  const { onPreviousStep, onNextStep } = useStepper();
  const { isMobile, isTablet } = useMobile();
  const [uploadCompleted, setUploadCompleted] = useState<boolean>(false);

  function onUploadFiles() {
    setUploadCompleted(true);
  }

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
          <div className="flex justify-center gap-2">
            {isMobile && (
              <BottomDrawer
                title={
                  !uploadCompleted ? "Upload your most updated CV" : "Success!"
                }
                onOpenChange={(open: boolean) =>
                  !open && setUploadCompleted(false)
                }
                trigger={<Button variant="outlined">Upload a new CV</Button>}
              >
                {!uploadCompleted && <UploadCv onSubmit={onUploadFiles} />}
                {uploadCompleted && <SuccessUploadCv />}
              </BottomDrawer>
            )}

            {!isMobile && (
              <UploadDocumentDialog
                title={
                  !uploadCompleted ? "Upload your most updated CV" : "Success!"
                }
                onOpenChange={(open: boolean) =>
                  !open && setUploadCompleted(false)
                }
                trigger={
                  <Button variant="outlined">
                    I need to upload a new version Upload a new CV
                  </Button>
                }
              >
                {!uploadCompleted && <UploadCv onSubmit={onUploadFiles} />}
                {uploadCompleted && <SuccessUploadCv />}
              </UploadDocumentDialog>
            )}

            <Button
              onClick={onNextStep}
              endIcon={<Icon.ArrowRight className="fill-white" />}
            >
              {isMobile ? "Use this CV" : "This CV is correct"}
            </Button>
          </div>
        }
      />
      <Divider className="my-6" />
      <div className="mt-4 md:mt-0 flex justify-center">
        <NeedSupport />
      </div>
    </div>
  );
}
