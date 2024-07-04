"use client";
import React from "react";
import EventCard from "@/components/common/cards/event-card";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  function getMockStatus(index: number) {
    switch (index) {
      case 0:
        return "approved";
      case 1:
        return "pending";
      case 2:
        return "cancelled";
      case 3:
        return "postponed";
      default:
        return "pending";
    }
  }
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
        <Typography variant="heading-card" color="red" className="mb-6">
          Current projects
        </Typography>
        <div className="grid grid-cols-3 gap-4">
          {[0, 1].map((_, index) => (
            <EventCard
              key={index}
              status={"approved"}
              onClick={() => router.push("/events-platform/event/1")}
            />
          ))}
        </div>

        <Typography variant="heading-card" color="red" className="my-6">
          Past activities
        </Typography>
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2, 3, 4, 5].map((_, index) => (
            <EventCard
              key={index}
              status={getMockStatus(index)}
              variant="compact"
            />
          ))}
        </div>
      </PageContainerPlatform>
    </>
  );
}
