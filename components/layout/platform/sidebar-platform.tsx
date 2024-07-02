"use client";
import Logo from "@/components/common/logo";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/icon";

export default function SidebarPlatform() {
  const pathname = usePathname();
  const iconClassName = "cursor-pointer fill-gray hover:fill-red w-6";
  const profileImage = "";
  return (
    <div className="bg-background fixed flex flex-col justify-start items-center p-4 border-r border-red min-h-screen">
      <Logo compact />
      <div className="mt-8 flex-1 flex flex-col items-center gap-6">
        <Icon.Home
          className={cn(
            iconClassName,
            pathname === "/events-platform" && "fill-red",
          )}
        />
        <Icon.Calendar className={cn(iconClassName)} />
        <Icon.Folder className={cn(iconClassName)} />
        <Icon.Collaboration className={cn(iconClassName)} />
      </div>
      <div className="mt-8 mb-16 flex-1 flex items-center justify-end flex-col gap-6">
        {/*<Icon.Bell className={iconClassName} />*/}

        <div className="bg-gray-300 rounded-full p-2">
          {profileImage ? (
            <Image
              src={profileImage}
              alt="profile-img"
              width="40"
              height="40"
            />
          ) : (
            <Icon.Person className="fill-gray-800" />
          )}
        </div>
        <Icon.Gear className={iconClassName} />
      </div>
    </div>
  );
}
