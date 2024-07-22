import AvatarBadge from "@/components/common/avatar-badge";
import Icon from "@/components/ui/icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/typography";
import React, { ReactNode, useState } from "react";
import {
  AttendeeBadgeStatus,
  AttendeeStatusBadge,
} from "./attedee-status-badge";
import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import { AttendeesDocumentStatus, AttendeesRowProps } from "@/types/attendee";
import AvatarProfile from "@/components/common/avatar-profile";
import Divider from "@/components/ui/divider";
import {
  Alert,
  AlertAction,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { getFormattedDate } from "@/utils/getFormattedDate";

const mockedLabels = [
  {
    name: `Doctor's Name`,
    containerStyle: "w-[230px]",
  },
  {
    name: "Documents",
    containerStyle: "w-[105px]",
  },
  {
    name: "iCd",
    containerStyle: "",
  },
  {
    name: "CODS",
    containerStyle: "",
  },
  {
    name: "Fee",
    containerStyle: "",
  },
  {
    name: "Approvazione",
    containerStyle: "",
  },
  {
    name: "Contratto",
    containerStyle: "",
  },
  { name: "Pagamento", containerStyle: "" },
];

export default function Attendees() {
  const iconStyle = "w-6 h-6";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAttendee, setSelectedAttendee] =
    useState<AttendeesRowProps | null>();
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="border-none">
            {mockedLabels.map((label, idx) => (
              <TableHead key={idx} className={label.containerStyle}>
                <Typography variant="body-sm">{label.name}</Typography>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            onClick={() => setIsDialogOpen(true)}
            className="cursor-pointer border-gray"
          >
            <TableCell>
              <AvatarBadge
                name={"Dott. Mario Rossi"}
                role={"Specializzazione"}
              />
            </TableCell>
            <TableCell className="flex justify-start gap-4">
              <div className="flex flex-col items-center">
                <Icon.Document className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  CV
                </Typography>
              </div>
              <div className="flex flex-col items-center">
                <Icon.DocumentPending className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  QI
                </Typography>
              </div>
            </TableCell>
            <TableCell>
              <Typography variant="body-sm">12345678</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body-sm">12345678</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body-sm" className="text-nowrap">
                € 980,00
              </Typography>
            </TableCell>
            <TableCell>
              <AttendeeStatusBadge status={AttendeeBadgeStatus.APPROVED} />
            </TableCell>
            <TableCell>
              <AttendeeStatusBadge status={AttendeeBadgeStatus.MISS_APPROVED} />
            </TableCell>
            <TableCell>
              <AttendeeStatusBadge status={AttendeeBadgeStatus.REJECTED} />
            </TableCell>
          </TableRow>
          <TableRow className="cursor-pointer border-gray">
            <TableCell>
              <AvatarBadge
                name={"Dott. Mario Rossi"}
                role={"Specializzazione"}
              />
            </TableCell>
            <TableCell className="flex h-full justify-start gap-4">
              <div className="flex flex-col items-center">
                <Icon.Document className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  CV
                </Typography>
              </div>
              <div className="flex flex-col items-center">
                <Icon.DocumentPending className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  QI
                </Typography>
              </div>
            </TableCell>
            <TableCell>
              <Typography variant="body-sm">12345678</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body-sm">12345678</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body-sm" className="text-nowrap">
                €980,00
              </Typography>
            </TableCell>
            <TableCell>
              <AttendeeStatusBadge status={AttendeeBadgeStatus.APPROVED} />
            </TableCell>
            <TableCell>
              <AttendeeStatusBadge status={AttendeeBadgeStatus.MISS_APPROVED} />
            </TableCell>
            <TableCell>
              <AttendeeStatusBadge status={AttendeeBadgeStatus.REJECTED} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <AttendeesRowDetailDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}

interface AttendeesRowDetailDialogProps extends SimpleDialogProps {
  attendee?: AttendeesRowProps;
}

const AttendeesRowDetailDialog = ({
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
      <AttendeeStatusBadge status={AttendeeBadgeStatus.APPROVED} />
      <div className="mt-6 flex items-start gap-2">
        <AvatarProfile
          name="Marco Rossi"
          className="h-[100px] w-[100px]"
          textVariant={"body-xl"}
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
              <AttendeeStatusBadge
                status={AttendeeBadgeStatus.SENT_FOR_SIGNATURE}
              />
            }
          />
        </div>

        <div>
          <Typography variant="heading-sm" color="red">
            Allegati
          </Typography>
        </div>

        <div>
          <Typography variant="heading-sm" color="red">
            Attività
          </Typography>

          <ActivityRowItem />
          <ActivityRowItem />
          <ActivityRowItem />
          <ActivityRowItem />
          <ActivityRowItem />
        </div>
      </div>
    </SimpleDialog>
  );
};
