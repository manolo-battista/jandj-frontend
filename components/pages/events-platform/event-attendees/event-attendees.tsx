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
} from "./attendee-status-badge";
import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import { AttendeesRowProps } from "@/types/attendee";
import AvatarProfile from "@/components/common/avatar-profile";
import Divider from "@/components/ui/divider";
import {
  Alert,
  AlertAction,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { getFormattedDate } from "@/utils/get-formatted-date";
import { cn } from "@/lib/utils";
import { AttendeesRowDetailDialog } from "./attendee-detail-dialog";

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
                <Icon.Document className={cn(iconStyle, "text-blue-700")} />
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
            <TableCell className="flex gap-4">
              <div className="flex flex-col items-center">
                <Icon.Document className={cn(iconStyle, "text-blue-700")} />
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
