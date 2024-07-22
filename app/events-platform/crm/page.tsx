"use client";

import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import DoctorCard from "@/components/common/cards/doctor-card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { TabButton } from "@/components/ui/tab";
import ActionBarPlatform from "@/components/layout/platform/action-bar-platform";
import Divider from "@/components/ui/divider";
import { SimpleDialog } from "@/components/common/simple-dialog";
import ProfileTypeCard from "@/components/common/cards/profile-type-card";
import CrmDetailDialog from "@/components/pages/events-platform/crm/crm-detail-dialog";
import SelectNewProfileDialog from "@/components/pages/events-platform/crm/select-new-profile-dialog";
export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "HCP", content: "Tab 1" },
    { title: "Istituzionali", content: "Tab 2" },
    { title: "Stampa", content: "Tab 3" },
    { title: "Associazioni di pazienti", content: "Tab 4" },
    { title: "Altro", content: "Tab 5" },
  ];

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
      <ActionBarPlatform>
        <SelectNewProfileDialog
          trigger={
            <Button
              color="secondary"
              size="sm"
              variant="outlined"
              endIcon={<Icon.Add className="h-4 w-4" />}
            >
              Aggiungi un nuovo profilo
            </Button>
          }
        />
      </ActionBarPlatform>
      <div className="p-6 pb-0">
        {tabs.map((tab, idx) => (
          <TabButton
            key={idx}
            title={tab.title}
            isActive={activeTab === idx}
            onClick={() => setActiveTab(idx)}
          />
        ))}
      </div>
      <Divider className="my-0" />
      <PageContainerPlatform>
        <div className="mt-2 grid grid-cols-12 gap-6">
          {[0, 1, 2, 3, 4].map((doctor, index) => (
            <div key={index} className="col-span-4">
              <CrmDetailDialog
                trigger={
                  <button>
                    <DoctorCard />
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </PageContainerPlatform>
    </>
  );
}
