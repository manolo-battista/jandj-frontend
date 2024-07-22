import Logo from "@/components/common/logo";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";

export default function Signin() {
  return (
    <>
      <div
        className="bg-size h-screen w-full bg-[url('/img/auth/background.png')] bg-cover bg-no-repeat"
        style={{
          backgroundSize: "140%",
          backgroundPosition: "left",
        }}
      >
        <div className="absolute left-0 top-0 z-0 h-screen w-screen bg-[#0046856B] backdrop-blur-2xl" />
      </div>
      <div className="absolute left-0 top-0 grid h-screen w-full grid-cols-12">
        <div className="col-span-6 flex h-full flex-col justify-center px-28">
          <Typography variant="heading-md" className="text-white">
            Event Management
          </Typography>
          <Logo color="white" className="w-100 mt-4" />
        </div>
        <div className="col-span-6 flex h-full items-center justify-center">
          <div className="bg-background p-20">
            <Typography variant="body-lg" className="text-black">
              Welcome!
            </Typography>
            <Typography variant="body-md">
              Please enter your credentials to access the platform
            </Typography>
            <div className="mt-4 flex flex-col gap-4">
              <Input placeholder="Fullname" />
              <Input placeholder="Email address" />
              <Input placeholder="Password" type="password" />
              <Button className="w-full">Login</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
