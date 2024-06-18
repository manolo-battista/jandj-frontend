"use client";
import Logo from "@/components/common/logo";
import {
  LayoutDashboardIcon,
  CalendarIcon,
  FileIcon,
  ContactIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const iconClassName = "cursor-pointer stroke-secondary hover:stroke-primary";
  const profileImage = "";
  return (
    <div className="bg-background fixed flex flex-col justify-start items-center p-4 border-r border-primary min-h-screen">
      <Logo compact />
      <div className="mt-8 flex-1 flex flex-col items-center gap-6">
        <LayoutDashboardIcon
          className={cn(
            iconClassName,
            pathname === "/platform" && "stroke-primary",
          )}
        />
        <CalendarIcon className={cn(iconClassName)} />
        <FileIcon className={cn(iconClassName)} />
        <ContactIcon className={cn(iconClassName)} />
      </div>
      <div className="mt-8 mb-16 flex-1 flex items-center justify-end flex-col gap-6">
        {/*<BellIcon className={iconClassName} />*/}
        <Image
          src={profileImage}
          alt="profile-img"
          className="bg-black rounded-full"
          width="40"
          height="40"
        />
        <SettingsIcon className={iconClassName} />
      </div>
    </div>
  );
}
