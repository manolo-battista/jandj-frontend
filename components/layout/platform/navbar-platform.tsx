import { Typography } from "@/components/ui/typography";
import React, { ReactNode } from "react";
import WelcomeMessage from "./welcome-message";

interface NavbarPlatformProps {
  title?: ReactNode;
}

export default function NavbarPlatform(props: NavbarPlatformProps) {
  const { title } = props;
  return (
    <nav className="flex items-center border-b border-gray bg-background-active p-6 py-4">
      <div className="flex-1">
        {title ? (
          title
        ) : (
          <WelcomeMessage
            userName="Donatella"
            message="Benvenuta nella tua dashboard"
          />
        )}
      </div>
    </nav>
  );
}
