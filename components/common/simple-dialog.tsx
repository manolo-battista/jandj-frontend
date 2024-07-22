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

export interface SimpleDialogProps {
  trigger?: ReactNode;
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  isOpen?: boolean;
  onOpenChange?(open: boolean): false | void;
}

export function SimpleDialog({
  trigger,
  title,
  description,
  children,
  onOpenChange,
  isOpen,
}: SimpleDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[80%]">
        {title ||
          (description && (
            <DialogHeader>
              <DialogTitle>
                <Typography variant="heading-md" color="red">
                  {title}
                </Typography>
              </DialogTitle>
              <DialogDescription>
                <Typography variant="heading-sm" color="red" className="mt-4">
                  {description}
                </Typography>
              </DialogDescription>
            </DialogHeader>
          ))}
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
