import Logo from "@/components/common/logo";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";

export default function Signin() {
  return (
    <>
      <div
        className="w-full h-screen bg-[url('/img/auth/background.png')] bg-no-repeat bg-cover bg-size"
        style={{
          backgroundSize: "140%",
          backgroundPosition: "left",
        }}
      >
        <div className="z-0 absolute left-0 top-0 w-screen h-screen bg-[#0046856B] backdrop-blur-2xl" />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen grid grid-cols-12">
        <div className="col-span-6 h-full flex flex-col justify-center px-28">
          <Typography variant="heading-md" className="text-white">
            Event Management
          </Typography>
          <Logo color="white" className="mt-4 w-100" />
        </div>
        <div className="col-span-6 h-full flex items-center justify-center">
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
