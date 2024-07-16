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

interface SimpleDialogProps {
  trigger: ReactNode;
  title: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  onOpenChange?(open: boolean): false | void;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { trigger, title, description, children, onOpenChange } = props;
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[80%]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="px-20">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
