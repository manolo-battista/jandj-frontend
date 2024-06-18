import Logo from "@/components/common/logo";
import {
  LayoutDashboardIcon,
  CalendarIcon,
  FileIcon,
  ContactIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const iconClassName = "cursor-pointer stroke-neutral hover:stroke-primary";
  const profileImage = "";
  return (
    <div className="flex flex-col justify-start items-center p-4 border-r border-primary min-h-screen">
      <Logo compact />
      <div className="mt-8 flex-1 flex flex-col items-center gap-6">
        <LayoutDashboardIcon className={iconClassName} />
        <CalendarIcon className={iconClassName} />
        <FileIcon className={iconClassName} />
        <ContactIcon className={iconClassName} />
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
