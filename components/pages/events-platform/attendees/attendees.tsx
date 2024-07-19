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
import React from "react";
import { AttendeeStatus, AttendeeStatusBadge } from "./attedee-status-badge";

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
  return (
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
      <div className="mt-"></div>
      <TableBody>
        <TableRow
          className="cursor-pointer border-gray"
          onClick={() => console.log("open dialog")}
        >
          <TableCell>
            <AvatarBadge name="Dott. Nome Cognome" role="Specializzazione" />
          </TableCell>
          <TableCell className="flex h-full justify-start gap-4">
            <div className="flex flex-col items-center">
              <Icon.Document />
              <Typography variant="body-sm" color="inverse">
                CV
              </Typography>
            </div>
            <div className="flex flex-col items-center">
              <Icon.Close className="text-red" />
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
            <Typography variant="body-sm">€ 980,00</Typography>
          </TableCell>
          <TableCell>
            <AttendeeStatusBadge status={AttendeeStatus.APPROVED} />
          </TableCell>
          <TableCell>
            <AttendeeStatusBadge status={AttendeeStatus.MISS_APPROVED} />
          </TableCell>
          <TableCell>
            <AttendeeStatusBadge status={AttendeeStatus.SENT_FOR_SIGNATURE} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <AvatarBadge name="Dott.ssa Nome Cognome" role="Specializzazione" />
          </TableCell>
          <TableCell className="flex h-full justify-start gap-4">
            <div className="flex flex-col items-center">
              <Icon.Document />
              <Typography variant="body-sm" color="inverse">
                CV
              </Typography>
            </div>
            <div className="flex flex-col items-center">
              <Icon.Close className="text-red" />
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
            <Typography variant="body-sm">€ 980,00</Typography>
          </TableCell>
          <TableCell>
            <AttendeeStatusBadge status={AttendeeStatus.REJECTED} />
          </TableCell>
          <TableCell>
            <AttendeeStatusBadge status={AttendeeStatus.TO_PAY} />
          </TableCell>
          <TableCell>
            <AttendeeStatusBadge status={AttendeeStatus.TO_APPROVE} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
