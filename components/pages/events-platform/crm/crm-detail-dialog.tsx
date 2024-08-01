import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import React, { ReactNode } from "react";
import AvatarProfile from "@/components/common/avatar-profile";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import Divider from "@/components/ui/divider";
import { getDate } from "@/utils/date";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import CardDropzone from "@/components/common/dropzones/card-dropzone";
import mockedFile from "@/constants/mockedFile";

interface CrmDetailDialogProps extends SimpleDialogProps {}

export default function CrmDetailDialog({ trigger }: CrmDetailDialogProps) {
  const InfoRowItem = (props: {
    icon: ReactNode;
    title: string;
    value?: string;
  }) => (
    <>
      <div className="flex gap-2 py-2">
        <div className="flex min-w-[30%] gap-2">
          {props.icon}
          <Typography className="body-xs">{props.title}</Typography>
        </div>
        <Typography className="body-lg">{props.value ?? "N/A"}</Typography>
      </div>
      <Divider />
    </>
  );

  const EventRowItem = () => (
    <>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4">
          <Typography>Forum di Innovazione in biotecnologie</Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="body-sm" color="inverse" className="flex gap-1">
            <Icon.Education />
            Congresso
          </Typography>
        </div>
        <div className="col-span-3">
          <Typography variant="body-sm" color="inverse" className="flex gap-1">
            <Icon.Pin />
            Hilton Hotel, Milano (IT)
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="body-sm" color="inverse" className="flex gap-1">
            <Icon.Calendar />
            {getDate(new Date())}
          </Typography>
        </div>
        <div className="col-span-1 flex justify-end">
          <Button className="p-3">
            <Icon.Clipboard />
          </Button>
        </div>
      </div>
      <Divider />
    </>
  );

  return (
    <SimpleDialog
      title={
        <>
          <Typography variant="body-sm" color="red" className="mb-6">
            Modifca
          </Typography>
          <div className="flex items-start gap-2">
            <AvatarProfile name="Marco Rossi" className="h-12 w-12" />
            <span>
              Dott. Nome Cognome
              <Typography variant="body-md" color="inverse" className="mt-2">
                Ematologia
              </Typography>
            </span>
          </div>
        </>
      }
      trigger={trigger}
    >
      <div className="flex flex-col gap-4">
        <Alert variant="error">
          <AlertContent>
            <AlertTitle>Documenti mancanti</AlertTitle>
            <AlertDescription>
              Questo invitato deve validare o condividere dei documenti
              obbligatori: Questionario Incarichi
            </AlertDescription>
            <AlertAction>Vedi dettagli</AlertAction>
          </AlertContent>
        </Alert>

        <div>
          <Typography variant="heading-sm" color="red">
            Informazioni personali
          </Typography>
          <InfoRowItem
            icon={<Icon.Email />}
            title="Email"
            value="nome.cognome@mail.it"
          />
          <InfoRowItem
            icon={<Icon.Phone />}
            title="Telefono"
            value="+39 123456789"
          />
          <InfoRowItem
            icon={<Icon.Pin />}
            title="Posizione"
            value="Milano, Italia"
          />
          <InfoRowItem
            icon={<Icon.Hospital />}
            title="Sede"
            value="Ospedale Niguarda"
          />
          <InfoRowItem
            icon={<Icon.Pill />}
            title="Specializzazione"
            value="Ematologia"
          />
        </div>

        <div>
          <Typography variant="heading-sm" color="red">
            Allegati
          </Typography>
          <div className="flex flex-wrap gap-2">
            <CardDropzone file={mockedFile} />
            <CardDropzone />
          </div>
        </div>

        <div>
          <Typography variant="heading-sm" color="red">
            Eventi
          </Typography>
          <Typography variant="body-sm" color="red">
            Eventi in programma
          </Typography>
          <Divider className="bg-red" />
          <EventRowItem />

          <Typography variant="body-sm" color="red" className="mt-4">
            Eventi partecipati in passato
          </Typography>
          <Divider className="bg-red" />
          <EventRowItem />
          <EventRowItem />
          <EventRowItem />
          <EventRowItem />
        </div>
      </div>
    </SimpleDialog>
  );
}
