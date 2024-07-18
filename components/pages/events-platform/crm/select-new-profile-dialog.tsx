import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ProfileTypeCard from "@/components/common/cards/profile-type-card";
import React from "react";
import { IProfileType } from "@/types/profile";
import AddNewProfileDialog from "@/components/pages/events-platform/crm/add-new-profile-dialog";

interface SelectNewProfileDialogProps extends SimpleDialogProps {}

export default function SelectNewProfileDialog({
  trigger,
}: SelectNewProfileDialogProps) {
  const profileTypes: IProfileType[] = [
    {
      icon: <Icon.GovtBuilding className="w-10 fill-red" />,
      title: "Istituzionali",
      description:
        "Politici e persone che fanno parte di istituzioni governative",
    },
    {
      icon: <Icon.Record className="w-10 fill-red" />,
      title: "Stampa",
      description: "Giornalisti, e persone che lavorano nel mondo delle news",
    },
    {
      icon: <Icon.LargeDemographics className="w-10 fill-red" />,
      title: "Associazioni di Pazienti",
      description:
        "Organizzazioni che rappresentano e supportano persone con una malattia",
    },
    {
      icon: <Icon.Population className="w-10 fill-red" />,
      title: "Altro",
      description: "Altre tipologie di contatti oltre a quelle elencate",
    },
  ];

  return (
    <SimpleDialog
      title="Aggiungi un nuovo profilo"
      description="Che tipo di profilo vuoi aggiungere?"
      trigger={
        <Button
          color="secondary"
          size="sm"
          variant="outlined"
          endIcon={<Icon.Add className="w-4 h-4" />}
        >
          Aggiungi un nuovo profilo
        </Button>
      }
    >
      <div className="grid grid-cols-12 gap-6">
        {profileTypes.map((profileType, index) => (
          <ProfileTypeCard
            key={`event-${index}`}
            icon={profileType.icon}
            title={profileType.title}
            description={profileType.description}
            className="col-span-6"
            action={
              <AddNewProfileDialog
                profileType={profileType}
                trigger={
                  <Button startIcon={<Icon.Add className="w-4 h-4" />}>
                    Crea
                  </Button>
                }
              />
            }
          />
        ))}
      </div>
    </SimpleDialog>
  );
}
