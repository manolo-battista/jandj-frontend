import React, { ReactNode } from "react";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import { StatusBadge } from "@/components/common/status-badge";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import AvatarProfile from "@/components/common/avatar-profile";
import Divider from "@/components/ui/divider";

export default function Page() {
  const RowItem = (props: {
    icon: ReactNode;
    title: string;
    value?: string;
  }) => (
    <div className="flex gap-2">
      {props.icon}
      <Typography className="body-xs" color="inverse">
        {props.title}
      </Typography>
      <Typography className="body-lg">{props.value ?? "N/A"}</Typography>
    </div>
  );
  return (
    <>
      <NavbarPlatform
        title={
          <div className="flex gap-2 items-center">
            <StatusBadge status="pending" />
            <Typography variant="heading-card">
              New perspectives in multiple myeloma
            </Typography>
          </div>
        }
      />
      <PageContainerPlatform>
        <Typography variant="heading-card" color="red" className="mb-6">
          Event Details
        </Typography>

        <div className={cn("p-4 py-6 bg-card")}>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div>
                <Typography variant="body-xs" className="mb-4">
                  Who and what
                </Typography>
                <div className="flex flex-col gap-4">
                  <RowItem
                    icon={<Icon.Pill className="fill-gray" />}
                    title="Product"
                  />
                  <RowItem
                    icon={<Icon.Star className="fill-gray" />}
                    title="Eventy type"
                    value="Medical Education Event"
                  />{" "}
                  <RowItem
                    icon={<Icon.Instructions className="fill-gray" />}
                    title="Event Number"
                    value="EV00305917"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 mt-8">
                <div className="col-span-6">
                  <Typography variant="body-xs" className="mb-4">
                    Attendees
                  </Typography>
                  <RowItem
                    icon={<Icon.Community className="fill-gray" />}
                    title="Attendees"
                  />
                </div>
                <div className="col-span-6">
                  <Typography variant="body-xs" className="mb-4">
                    Panel
                  </Typography>
                  <div className="flex gap-2 items-center">
                    <Typography color="inverse" className="underline">
                      See the list
                    </Typography>
                    <div className="flex">
                      {[0, 1, 2, 3].map((attendee, index) => (
                        <AvatarProfile
                          index={index}
                          key={index}
                          name="Utente Prova"
                          length={4}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <Typography variant="body-xs" className="mb-4">
                When and where
              </Typography>
              <div className="flex flex-col gap-4">
                <RowItem
                  icon={<Icon.Calendar className="fill-gray" />}
                  title="Date"
                  value="12/07/2024"
                />
                <RowItem
                  icon={<Icon.Time className="fill-gray" />}
                  title="Time"
                  value="14:00 - 16:00"
                />
                <RowItem
                  icon={<Icon.Webinar className="fill-gray" />}
                  title="Event Modality"
                  value="Hybrid"
                />
                <RowItem
                  icon={<Icon.Pin className="fill-gray" />}
                  title="Location"
                  value="Hilton Hotel Milan, Italy"
                />
                <RowItem
                  icon={<Icon.Computer className="fill-gray" />}
                  title="Platform"
                  value="Zoom Call"
                />
              </div>
            </div>
          </div>
          <Divider className="my-8" />
          <div className="flex items-center gap-3">
            <AvatarProfile name="Donatella Rossi" />
            <Typography variant="body-md">Donatella Rossi</Typography>
          </div>
        </div>
      </PageContainerPlatform>
    </>
  );
}
