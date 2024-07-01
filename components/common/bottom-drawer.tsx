import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import NeedSupport from "@/components/common/need-support";

interface BottomDrawerProps {
  trigger: ReactNode;
  title: string | ReactNode;
  children?: ReactNode;
  onOpenChange?(open: boolean): false | void;
}

export function BottomDrawer(props: BottomDrawerProps) {
  const { trigger, title, children, onOpenChange } = props;
  return (
    <Drawer onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto h-[96vh] md:h-screen w-full p-4">
          <DrawerClose asChild>
            <Typography variant="body-label" color="red" className="flex gap-3">
              <Icon.ArrowLeft />
              Back
            </Typography>
          </DrawerClose>

          <div className="flex flex-col">
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
            </DrawerHeader>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
