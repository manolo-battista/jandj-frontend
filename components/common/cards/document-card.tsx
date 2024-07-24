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
  title: string;
}
export default function DocumentCard(props: DocumentCardProps) {
  const { className, title } = props;
  return (
    <div className={cn("col-span-4 flex bg-background", className)}>
      <div className="relative h-full w-36 min-w-36">
        <Image
          src="/dev/doc_template.png"
          width={500}
          height={300}
          alt="Doc template"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black opacity-30" />
        <div className="absolute left-0 top-0 flex h-6 w-full justify-end bg-black/40 px-1">
          <Icon.DotsMenu className="w-6 fill-white" />
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-tag px-1 py-0">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 min-w-2 rounded-full bg-blue" />
              Template
            </span>
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <Typography variant="heading-xs">{title}</Typography>
        <Typography variant="body-sm" color="inverse" className="mt-4">
          pdf • {formatBytes(140000)} • {getDate(new Date())}
        </Typography>
        <Typography
          variant="link"
          className="mt-2 flex cursor-pointer gap-1 text-red"
        >
          Scarica
          <Icon.Download className="w-4" />
        </Typography>
      </div>
    </div>
  );
}


