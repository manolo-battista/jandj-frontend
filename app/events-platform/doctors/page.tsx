import React from "react";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import DoctorCard from "@/components/common/cards/doctor-card";
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
      <PageContainerPlatform>
        <div className="flex">
          <Typography variant="heading-card" color="red" className="flex-1">
            Doctors
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Icon.HealthcareProvider />}
            endIcon={<Icon.Add />}
          >
            Add a new doctor
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-6">
          {[0, 1, 2, 3, 4].map((doctor, index) => (
            <div key={index} className="col-span-4">
              <DoctorCard />
            </div>
          ))}
        </div>
      </PageContainerPlatform>
    </>
  );
}
