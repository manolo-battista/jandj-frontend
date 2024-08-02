import { ApprovationStatus } from "@/components/common/approvation-status-badge";
import { ContractStatus } from "@/components/common/contract-status-badge";
import { DocumentStatus } from "@/components/common/document-status-badge";
import { PaymentStatus } from "@/components/common/payment-status-badge";

type AttendeesRowProps = {
  name: string;
  role: string;
  CVdocumentStatus: DocumentStatus;
  QIdocumentStatus: DocumentStatus;
  fee: string;
  iCd: string;
  CODS: string;
  approvationStatus: ApprovationStatus;
  contractStatus: ContractStatus;
  paymentStatus: PaymentStatus;
};

export type { AttendeesRowProps };
