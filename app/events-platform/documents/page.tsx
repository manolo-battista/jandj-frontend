import React from "react";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import DocumentCard from "@/components/common/cards/document-card";
import ActionBarPlatform from "@/components/layout/platform/action-bar-platform";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
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
      <ActionBarPlatform
      // onSearch={(searchedText) => console.log("Cerca ", searchedText)}
      >
        <Button
          color="secondary"
          size="sm"
          variant="outlined"
          endIcon={<Icon.Add className="w-4 h-4" />}
        >
          Carica un nuovo template
        </Button>
      </ActionBarPlatform>
      <PageContainerPlatform>
        <Typography variant="heading-card" color="red">
          Template
        </Typography>
        <div className="grid grid-cols-12 gap-6 mt-6">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((template) => (
            <DocumentCard key={template} />
          ))}
        </div>
      </PageContainerPlatform>
    </>
  );
}
