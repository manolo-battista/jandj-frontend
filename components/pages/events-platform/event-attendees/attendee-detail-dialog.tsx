import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import Divider from "@/components/ui/divider";
import { Typography } from "@/components/ui/typography";
import { getFormattedDate } from "@/utils/get-formatted-date";
import { ReactNode } from "react";
import AvatarProfile from "@/components/common/avatar-profile";
import {
  Alert,
  AlertAction,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import Icon from "@/components/ui/icon";
import { AttendeesRowProps } from "@/types/attendee";
import CardDropzone from "@/components/common/dropzones/card-dropzone";
import mockedFile from "@/constants/mockedFile";
import {
  ContractStatus,
  ContractStatusBadge,
} from "@/components/common/contract-status-badge";

interface AttendeesRowDetailDialogProps extends SimpleDialogProps {
  attendee?: AttendeesRowProps;
}

export const AttendeesRowDetailDialog = ({
  isOpen,
  onOpenChange,
  attendee,
}: AttendeesRowDetailDialogProps) => {
  const InfoRowItem = (props: {
    icon: ReactNode;
    title: string;
    value?: string | ReactNode;
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

  const ActivityRowItem = () => (
    <>
      <div className="my-3 flex flex-wrap gap-2">
        <div>
          <Typography variant="body-sm" color="inverse" className="text-nowrap">
            {getFormattedDate(new Date())}
          </Typography>
        </div>
        <div>
          <Typography variant="body-sm">
            Ha firmato “Transfer of Value” per l’evento “Nuove Prospettive sul
            Mieloma Multiplo”
          </Typography>
        </div>
      </div>
      <Divider />
    </>
  );

  // TODO alert logic
  return (
    <SimpleDialog isOpen={isOpen} onOpenChange={onOpenChange}>
      <ContractStatusBadge status={ContractStatus.APPROVED} />
      <div className="mt-6 flex items-start gap-2">
        <AvatarProfile
          name="Marco Rossi"
          className="size-[100px]"
          textClassName="text-[28px]"
        />
        <Typography variant={"heading-md"} color="red">
          Dott. Nome Cognome
          <Typography variant="body-lg">Ematologia</Typography>
        </Typography>
      </div>
      <div className="mt-10 flex flex-col gap-4">
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
            {`Informazioni per l'evento`}
          </Typography>
          <InfoRowItem
            icon={<Icon.Info />}
            title="Framework"
            value="In Framework"
          />
          <InfoRowItem
            icon={<Icon.Info />}
            title="iCd number"
            value="1234567"
          />
          <InfoRowItem icon={<Icon.Info />} title="CODS" value="1234567" />
          <InfoRowItem
            icon={<Icon.Library />}
            title="Tempo di preparazione"
            value="3 ore"
          />
          <InfoRowItem
            icon={<Icon.Community />}
            title="Tempo di presenza"
            value="3 ore"
          />
          <InfoRowItem icon={<Icon.Euro />} title="Fee" value="€ 980,00" />
          <InfoRowItem
            icon={<Icon.Document />}
            title="Contratto"
            value={
              <ContractStatusBadge status={ContractStatus.SENT_FOR_SIGNATURE} />
            }
          />
        </div>

        <div>
          <Typography variant="heading-sm" color="red">
            Allegati
          </Typography>
          <div className="flex flex-wrap items-center gap-2">
            <CardDropzone file={mockedFile} />
            <CardDropzone />
          </div>
        </div>

        {/* <div>
          <Typography variant="heading-sm" color="red">
            Attività
          </Typography>

          <ActivityRowItem />
          <ActivityRowItem />
          <ActivityRowItem />
          <ActivityRowItem />
          <ActivityRowItem />
        </div> */}
      </div>
    </SimpleDialog>
  );
};
