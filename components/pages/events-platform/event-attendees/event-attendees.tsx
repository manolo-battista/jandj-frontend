import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import { AttendeesRowProps } from "@/types/attendee";
import { AttendeesRowDetailDialog } from "./attendee-detail-dialog";
import AvatarBadge from "@/components/common/avatar-badge";
import {
  DocumentStatus,
  DocumentStatusBadge,
} from "@/components/common/document-status-badge";
import {
  ApprovationStatus,
  ApprovationStatusBadge,
} from "@/components/common/approvation-status-badge";
import {
  ContractStatus,
  ContractStatusBadge,
} from "@/components/common/contract-status-badge";
import {
  PaymentStatus,
  PaymentStatusBadge,
} from "@/components/common/payment-status-badge";

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

export default function EventAttendees() {
  const iconStyle = "w-6 h-6";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAttendee, setSelectedAttendee] =
    useState<AttendeesRowProps | null>();

  const EventAttendeeRow = ({
    name,
    role,
    CVdocumentStatus,
    QIdocumentStatus,
    iCd,
    CODS,
    fee,
    approvationStatus,
    contractStatus,
    paymentStatus,
  }: AttendeesRowProps) => {
    return (
      <TableRow
        onClick={() => setIsDialogOpen(true)}
        className="cursor-pointer border-gray"
      >
        <TableCell>
          <AvatarBadge name={name} role={role} />
        </TableCell>
        <TableCell className="flex justify-start gap-4">
          <div className="flex flex-col items-center">
            <DocumentStatusBadge status={CVdocumentStatus} />
            <Typography variant="body-sm" color="inverse">
              CV
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <DocumentStatusBadge status={QIdocumentStatus} />
            <Typography variant="body-sm" color="inverse">
              QI
            </Typography>
          </div>
        </TableCell>
        <TableCell>
          <Typography variant="body-sm">{iCd}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body-sm">{CODS}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body-sm" className="text-nowrap">
            € {fee}
          </Typography>
        </TableCell>
        <TableCell>
          <ApprovationStatusBadge status={approvationStatus} />
        </TableCell>
        <TableCell>
          <ContractStatusBadge status={contractStatus} />
        </TableCell>
        <TableCell>
          <PaymentStatusBadge status={paymentStatus} />
        </TableCell>
      </TableRow>
    );
  };

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
          <EventAttendeeRow
            name={"Prova"}
            role={"specializzazione"}
            CVdocumentStatus={DocumentStatus.APPROVED}
            QIdocumentStatus={DocumentStatus.APPROVED}
            fee={"980,00"}
            iCd={"12345678"}
            CODS={"12345678"}
            approvationStatus={ApprovationStatus.APPROVED}
            contractStatus={ContractStatus.APPROVED}
            paymentStatus={PaymentStatus.PAID}
          />
          <EventAttendeeRow
            name={"Prova"}
            role={"specializzazione"}
            CVdocumentStatus={DocumentStatus.MISSING}
            QIdocumentStatus={DocumentStatus.MISSING}
            fee={"980,00"}
            iCd={"12345678"}
            CODS={"12345678"}
            approvationStatus={ApprovationStatus.IN_PROGRESS}
            contractStatus={ContractStatus.PENDING}
            paymentStatus={PaymentStatus.TO_PAY}
          />
          <EventAttendeeRow
            name={"Prova"}
            role={"specializzazione"}
            CVdocumentStatus={DocumentStatus.PENDING}
            QIdocumentStatus={DocumentStatus.PENDING}
            fee={"980,00"}
            iCd={"12345678"}
            CODS={"12345678"}
            approvationStatus={ApprovationStatus.REJECTED}
            contractStatus={ContractStatus.REJECTED}
            paymentStatus={PaymentStatus.PENDING}
          />
          <EventAttendeeRow
            name={"Prova"}
            role={"specializzazione"}
            CVdocumentStatus={DocumentStatus.APPROVED}
            QIdocumentStatus={DocumentStatus.PENDING}
            fee={"980,00"}
            iCd={"12345678"}
            CODS={"12345678"}
            approvationStatus={ApprovationStatus.TO_APPROVE}
            contractStatus={ContractStatus.TO_SIGN}
            paymentStatus={PaymentStatus.IN_PROCESSING}
          />
        </TableBody>
      </Table>
      <AttendeesRowDetailDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
