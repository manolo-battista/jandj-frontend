import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import Dropzone from "@/components/ui/dropzone";
import Icon from "@/components/ui/icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  IKanbanBoardTask,
  ITaskPriority,
  ITaskStatus,
} from "@/types/kanban-board";
import { getFormattedDate } from "@/utils/getFormattedDate";
import { formattedTaskStatusTitle } from "@/utils/getStatusTitle";
import React, { useEffect, useState } from "react";
import { PriorityBadge } from "./priority-badge";
import { Textarea } from "@/components/ui/textarea";
import Divider from "@/components/ui/divider";
import { DialogTrigger } from "@radix-ui/react-dialog";

const initialTaskData = {
  id: "",
  title: "",
  content: "",
  date: undefined,
  status: ITaskStatus.TODO,
  priority: undefined,
};

type CreateTaskProps = {
  onOpenChange: (open: boolean) => false | void;
  onSubmit: (task: IKanbanBoardTask) => void;
  trigger: React.ReactNode;
};

export default function TaskDetailDialog({
  onOpenChange,
  onSubmit,
  trigger,
}: CreateTaskProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [taskData, setTaskData] = useState<IKanbanBoardTask>(initialTaskData);

  const iconStyle = "w-4 h-4";
  const fieldStyle = "border-0 border-b-gray border-b-2 bg-gray-100 px-3 py-2";
  const formattedDate = getFormattedDate(taskData.date);

  function handleSubmit() {
    onSubmit(taskData);
    setTaskData(initialTaskData);
  }

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-[80%] max-w-[80%] overflow-y-scroll py-14">
        <Textarea
          className={cn("mt-4 border-none text-md")}
          placeholder="Titolo"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />
        <div className="grid w-[50%] grid-cols-2 gap-4">
          <div className="col-span-1 grid grid-rows-3 gap-6">
            <div className="flex items-center gap-2">
              <Icon.Chart className={cn(iconStyle)} />
              <Typography variant="body-md">Stato</Typography>
            </div>
            <div className="flex items-center gap-2">
              <Icon.Calendar className={cn(iconStyle)} />
              <Typography variant="body-md">Data di Scadenza</Typography>
            </div>
            <div className="flex items-center gap-2">
              <Icon.CircleAlert className={cn(iconStyle)} />
              <Typography variant="body-md">Priorità</Typography>
            </div>
          </div>

          <div className="col-span-1 grid grid-rows-3 gap-6">
            <Select
              value={taskData.status}
              onValueChange={(value: ITaskStatus) =>
                setTaskData({ ...taskData, status: value })
              }
            >
              <SelectTrigger
                className={cn(
                  "rounded-none",
                  fieldStyle,
                  "text-[1rem] text-gray",
                )}
              >
                <SelectValue placeholder={"Seleziona una voce"} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {Object.values(ITaskStatus).map((status) => (
                  <SelectItem aria-checked key={status} value={status}>
                    <Typography variant="body-md">
                      {formattedTaskStatusTitle(status)}
                    </Typography>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger
                className={cn(
                  "flex items-center justify-between",
                  fieldStyle,
                  !formattedDate ? "text-gray" : "",
                )}
              >
                {formattedDate ?? "Seleziona una data"}
                <Icon.Calendar className={iconStyle} />
              </PopoverTrigger>
              <PopoverContent className="flex justify-center bg-white">
                <Calendar
                  mode="single"
                  selected={taskData.date}
                  onSelect={(date: Date | undefined) =>
                    setTaskData({ ...taskData, date: date as Date })
                  }
                />
              </PopoverContent>
            </Popover>
            <Select
              value={taskData.priority}
              onValueChange={(value: ITaskPriority) =>
                setTaskData({ ...taskData, priority: value })
              }
            >
              <SelectTrigger
                className={cn(
                  fieldStyle,
                  "flex items-center rounded-none pt-0",
                )}
              >
                <SelectValue
                  placeholder={<PriorityBadge priority="placeholder" />}
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {Object.values(ITaskPriority).map((priority) => (
                  <SelectItem aria-checked key={priority} value={priority}>
                    <PriorityBadge priority={priority} />
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Typography variant="heading-sm" color="red" className="mt-10">
          Descrizione
        </Typography>
        <Textarea
          className={cn("mt-4", fieldStyle)}
          placeholder="Scrivi qui"
          value={taskData.content}
          onChange={(e) =>
            setTaskData({ ...taskData, content: e.target.value })
          }
        />

        <Typography variant="heading-sm" color="red" className="mt-10">
          Allegati
        </Typography>
        <Dropzone onChange={(files) => setFiles(files)}>
          {/* <Button variant="outlined" className="mt-2">
            {files.length > 0 ? "Replace file" : "Select file"}
          </Button> */}
        </Dropzone>
        <Divider className="mt-10" />
        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button
              onClick={handleSubmit}
              startIcon={<Icon.Check className="h-6 w-6" />}
            >
              <Typography variant="body-md" color="on-color">
                Pubblica Task
              </Typography>
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
