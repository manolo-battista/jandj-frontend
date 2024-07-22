"use client";
import Logo from "@/components/common/logo";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Icon from "@/components/ui/icon";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";
import AvatarProfile from "@/components/common/avatar-profile";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SidebarPlatform() {
  const router = useRouter();
  const pathname = usePathname();
  const iconClassName = "cursor-pointer fill-gray hover:fill-red w-6";
  const baseUrl = "/events-platform";
  return (
    <div className="fixed flex min-h-screen min-w-[72px] flex-col items-center justify-start border-r border-red bg-background p-4">
      <Link href={`${baseUrl}/`}>
        <Logo compact className="w-9" />
      </Link>
      <div className="mt-24 flex flex-1 flex-col items-center gap-6">
        <Link href={`${baseUrl}/`}>
          <Icon.Home
            className={cn(iconClassName, pathname === baseUrl && "fill-red")}
          />
        </Link>
        <Link href={`${baseUrl}/create`}>
          <Icon.Calendar
            className={cn(
              iconClassName,
              pathname === `${baseUrl}/create` && "fill-red",
            )}
          />
        </Link>
        <Link href={`${baseUrl}/documents`}>
          <Icon.Folder
            className={cn(
              iconClassName,
              pathname === `${baseUrl}/documents` && "fill-red",
            )}
          />
        </Link>
        <Link href={`${baseUrl}/crm`}>
          <Icon.Collaboration
            className={cn(
              iconClassName,
              pathname === `${baseUrl}/crm` && "fill-red",
            )}
          />
        </Link>
      </div>
      <div className="mb-16 mt-8 flex flex-1 flex-col items-center justify-end gap-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Icon.Bell className={iconClassName} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="z-50 bg-white">
              <Typography variant="body-xs">
                Stiamo lavorando sulla funzionalità notifiche.
              </Typography>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <AvatarProfile
              name="Utente Prova"
              className="h-10 w-10 bg-blue-600"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-2 p-2">
            <div className="flex items-center gap-2 p-2">
              <AvatarProfile
                name="Utente Prova"
                className="h-10 w-10 bg-blue-600"
              />
              <div>
                <Typography>Utente Prova</Typography>
                <Typography variant="body-sm" color="inverse">
                  utenteprova@its.jnj.com
                </Typography>
              </div>
            </div>
            <DropdownMenuSeparator />
            <div className="p-2">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => router.push("/auth/login")}
              >
                <div className="flex gap-2">
                  <Icon.Logout className="fill-red" />
                  Esci
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/*<Icon.Gear className={iconClassName} />*/}
      </div>
    </div>
  );
}
