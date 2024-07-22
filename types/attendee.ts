import { AttendeeBadgeStatus } from "@/components/pages/events-platform/attendees/attedee-status-badge";

type AttendeesDocumentStatus = "approved" | "rejected" | "pending";

type AttendeesRowProps = {
  name: string;
  role: string;
  CVdocument: AttendeesDocumentStatus;
  QIdocument: AttendeesDocumentStatus;
  fee: string;
  iCd: string;
  CODS: string;
  approvationStatus: AttendeeBadgeStatus;
  contractStatus: AttendeeBadgeStatus;
  paymentStatus: AttendeeBadgeStatus;
};

export type { AttendeesRowProps, AttendeesDocumentStatus };
