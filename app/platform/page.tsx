import React from "react";
import Divider from "@/components/ui/divider";
import EventCard from "@/components/common/event-card";
import { Typography } from "@/components/ui/typography";

export default function Page() {
  return (
    <div>
      <Typography variant="body-xl" color="red">
        Hello Annie!
      </Typography>
      <Typography variant="body-lg">Welcome to your dashboard</Typography>
      <Divider className="mt-4 h-1 w-[100px] bg-red" />

      <Typography variant="heading-md" className="mt-6">
        Your current projects
      </Typography>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1].map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>

      <Typography variant="heading-md" className="mt-6">
        Past activities
      </Typography>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2, 3].map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>
    </div>
  );
}
