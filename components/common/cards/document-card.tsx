import Icon from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import { formatBytes } from "@/utils/file";
import { getDate } from "@/utils/date";
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface DocumentCardProps {
  className?: string;
}
export default function DocumentCard(props: DocumentCardProps) {
  const { className } = props;
  return (
    <div className={cn("col-span-4 bg-background flex", className)}>
      <div className="w-36 h-full relative">
        <Image
          src="/dev/doc_template.png"
          width={500}
          height={300}
          alt="Doc template"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30" />
        <div className="absolute top-0 left-0 w-full h-6 bg-black/40 flex justify-end px-1">
          <Icon.DotsMenu className="fill-white w-6" />
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-tag py-0 px-1">
            <span className="flex gap-1 items-center">
              <span className="min-w-2 w-2 h-2 bg-blue rounded-full" />
              Template
            </span>
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <Typography variant="heading-xs">Agenda Evento</Typography>
        <Typography variant="body-sm" color="inverse" className="mt-4">
          pdf • {formatBytes(140000)} • {getDate(new Date())}
        </Typography>
        <Typography variant="link" className="mt-2 flex gap-1 text-red">
          Scarica
          <Icon.Download className="w-4" />
        </Typography>
      </div>
    </div>
  );
}
