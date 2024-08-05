"use client";
import React from "react";
import EventCard from "@/components/common/cards/event-card";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import { useRouter } from "next/navigation";
import { IStatus } from "@/types/status";
import WelcomeMessage from "@/components/layout/platform/welcome-message";
import ActionBarPlatform from "@/components/layout/platform/action-bar-platform";
import Icon from "@/components/ui/icon";
import AvatarProfile from "@/components/common/avatar-profile";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AvatarBadge from "@/components/common/avatar-badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const mockedDoctor = [
  "Dr. Mario Rossi",
  "Dr. Luigi Verdi",
  "Dr. Peach Bianchi",
  "Dr. Toad Gialli",
  "Dr. Bowser Neri",
  "Dr. Yoshi Rossi",
  "Dr. Wario Verdi",
];

export default function Page() {
  const router = useRouter();
  const [selectedOwners, setSelectedOwners] = React.useState<string[]>([
    "Dr. Mario Rossi",
  ]);
  function getMockStatus(index: number) {
    switch (index) {
      case 0:
        return IStatus.APPROVED;
      case 1:
        return IStatus.DRAFT;
      case 2:
        return IStatus.CANCELLED;
      case 3:
        return IStatus.LIVE;
      default:
        return IStatus.DRAFT;
    }
  }

  function handleOwnersFilter(value: string) {
    if (selectedOwners.includes(value)) {
      setSelectedOwners(selectedOwners.filter((owner) => owner !== value));
    } else {
      setSelectedOwners([...selectedOwners, value]);
    }
  }

  return (
    <>
      <NavbarPlatform
        title={
          <WelcomeMessage
            userName="Donatella"
            message="Benvenuta nella tua dashboard"
          />
        }
      />

      <ActionBarPlatform
        onSearch={(searchedText) => console.log("Cerca ", searchedText)}
      >
        <div className="flex items-center gap-6">
          <Icon.Filter className="size-6" />
          <div className="grid w-fit auto-cols-auto grid-flow-col gap-2 divide-x-[1px] divide-gray rounded-full border border-gray">
            <div className="flex w-fit items-center justify-center gap-2 px-2 py-[3px]">
              <Icon.Person className="size-4" />
              <Typography variant="body-xs">Owner</Typography>
            </div>
            <div className="flex max-w-fit items-center justify-center gap-2 px-2 py-[3px]">
              <Typography variant="body-xs">Includi:</Typography>
            </div>
            <div className="flex w-fit items-center justify-center gap-2 px-2 py-[3px]">
              <EventOwnerFilter
                owners={mockedDoctor}
                selectedOwners={selectedOwners}
                onChange={(value: string) => handleOwnersFilter(value)}
              />
            </div>
          </div>
        </div>
      </ActionBarPlatform>

      <PageContainerPlatform>
        <div className="flex items-center justify-between">
          <Typography variant="heading-card" color="red" className="mb-6">
            Eventi in Corso
          </Typography>
          <Button
            variant="default"
            color="secondary"
            onClick={() => console.log("connect")}
            startIcon={<Icon.Lifecycle />}
          >
            Sincronizza con iConnect
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[0, 1].map((_, index) => (
            <EventCard
              key={index}
              status={IStatus.APPROVED}
              onClick={() => router.push("/events-platform/event/1")}
            />
          ))}
        </div>

        <Typography variant="heading-card" color="red" className="my-6">
          Eventi Passati
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

type EventFilterProps = {
  owners: string[];
  selectedOwners: string[];
  onChange: (value: string) => void;
};

const EventOwnerFilter = ({
  owners,
  selectedOwners,
  onChange,
}: EventFilterProps) => {
  const [open, setOpen] = React.useState(false);

  const hasBeenSelected = (name: string) => selectedOwners.includes(name);
  // se l'utente è nella lista ed è l'unico allora mostrare solo i tuoi eventi
  const isUserOnlyOwner =
    selectedOwners.length === 1 && selectedOwners[0] === "Dr. Mario Rossi";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div aria-expanded={open} className="flex items-center">
          <div className="m-1 flex items-center gap-1">
            {selectedOwners.map((name, index) => (
              <AvatarProfile
                name={name}
                variant="small"
                index={index}
                key={index}
                length={selectedOwners.length}
                showCount={false}
              />
            ))}

            <Typography variant="body-xs">
              {isUserOnlyOwner
                ? "solo i tuoi eventi"
                : `${selectedOwners.length} owners`}
            </Typography>
          </div>
          <Icon.ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[175px] bg-white p-0">
        <Command>
          <CommandInput
            className="rounded-none bg-gray-100 p-1 font-johnson-text text-[0.75rem]"
            placeholder="Cerca per nome"
            autoFocus
          />
          <CommandEmpty>
            <Typography variant="body-label">No framework found.</Typography>
          </CommandEmpty>
          <CommandGroup>
            <CommandList>
              {owners.map((name) => (
                <CommandItem key={name} value={name} onSelect={onChange}>
                  <Icon.Check
                    className={cn(
                      "mr-2 h-4 w-4 text-red",
                      hasBeenSelected(name) ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <AvatarBadge name={name} variant="small" />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
