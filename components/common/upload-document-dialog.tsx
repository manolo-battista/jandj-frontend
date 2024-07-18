import * as React from "react";
import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Typography } from "@/components/ui/typography";

interface UploadDocumentDialogProps {
  trigger: ReactNode;
  title: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  onOpenChange?(open: boolean): false | void;
}

export function UploadDocumentDialog({
  trigger,
  title,
  description,
  children,
  onOpenChange,
}: UploadDocumentDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[80%]">
        <DialogHeader>
          <DialogTitle className="text-center">
            <Typography variant="heading-sm">{title}</Typography>
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="px-20">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
