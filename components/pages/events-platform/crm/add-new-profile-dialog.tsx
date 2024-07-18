import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ProfileTypeCard from "@/components/common/cards/profile-type-card";
import React from "react";
import { IProfileType } from "@/types/profile";
import { Typography } from "@/components/ui/typography";

interface AddNewProfileDialogProps extends SimpleDialogProps {
  profileType: IProfileType;
}

export default function AddNewProfileDialog({
  profileType,
  trigger,
}: AddNewProfileDialogProps) {
  return (
    <SimpleDialog
      title={`Nuovo profilo - ${profileType.title}`}
      trigger={trigger}
    >
      <div className="flex flex-col gap-6">
        <Typography variant="heading-sm" color="red">
          Eventi in programma
        </Typography>

        <Typography variant="heading-sm" color="red">
          Allegati
        </Typography>
      </div>
    </SimpleDialog>
  );
}
