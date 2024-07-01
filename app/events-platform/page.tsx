import React from "react";
import Divider from "@/components/ui/divider";
import EventCard from "@/components/common/event-card";
import { Typography } from "@/components/ui/typography";

export default function Page() {
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
    <div>
      <Typography variant="body-xl" color="red">
        Hello Annie!
      </Typography>
      <Typography variant="body-lg">Welcome to your dashboard</Typography>
      <Divider className="mt-4 h-1 w-[100px] bg-red" />

      <Typography variant="heading-card" color="red" className="mt-6">
        Current projects
      </Typography>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1].map((_, index) => (
          <EventCard key={index} status={"approved"} />
        ))}
      </div>

      <Typography variant="heading-card" color="red" className="mt-6">
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
    </div>
  );
}
