import React from "react";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
export default function Page() {
  return (
    <>
      <NavbarPlatform
        title={
          <>
            <Typography variant="body-xl" color="red">
              Hello Annie!
            </Typography>
            <Typography variant="body-lg">Welcome to your dashboard</Typography>
          </>
        }
      />
      <PageContainerPlatform>
        <Typography variant="heading-card" color="red">
          Documents Templates
        </Typography>
        <div className="grid grid-cols-12 gap-6 mt-6"></div>
      </PageContainerPlatform>
    </>
  );
}
