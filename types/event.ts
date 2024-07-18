import { ReactNode } from "react";

export interface IEventType {
  icon: ReactNode;
  title: string;
  description: string;
  action: "internal" | "iconnect";
}
