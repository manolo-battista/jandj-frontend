import React, { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainerPlatform(props: PageContainerProps) {
  return <div className="p-6">{props.children}</div>;
}
