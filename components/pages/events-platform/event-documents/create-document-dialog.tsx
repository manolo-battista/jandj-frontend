import { SimpleDialog } from "@/components/common/simple-dialog";
import React from "react";

type CreateDocumentDialogStepperProps = {
  trigger: React.ReactNode;
};

export default function CreateDocumentDialogStepper({
  trigger,
}: CreateDocumentDialogStepperProps) {
  return <SimpleDialog trigger={trigger}></SimpleDialog>;
}
