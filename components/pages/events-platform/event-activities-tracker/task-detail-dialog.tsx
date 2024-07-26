import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DialogHeader, Dialog, DialogContent } from "@/components/ui/dialog";
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
import React, { useState } from "react";
import { PriorityBadge } from "./priority-badge";
import { Textarea } from "@/components/ui/textarea";
import { getFormattedDate } from "@/utils/get-formatted-date";
import { formattedTaskStatusTitle } from "@/utils/get-status-title";

type TaskDetailProps = {
  setOpen: (open: boolean) => false | void;
  isOpen: boolean;
  task: IKanbanBoardTask | null;
  onSubmit(task: IKanbanBoardTask): void;
};

export default function TaskDetailDialog({
  setOpen,
  task,
  onSubmit,
  isOpen,
}: TaskDetailProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [taskData, setTaskData] = useState<IKanbanBoardTask>({
    ...task,
  } as IKanbanBoardTask);

  const IconComponent = !isEditing ? Icon.Write : Icon.Check;
  const buttonText = !isEditing ? "Modifica" : "Fatto";
  const iconStyle = "w-4 h-4";
  const fieldStyle = "border-b-gray-500 border-b-2 bg-gray-100 px-3 py-2";
  const formattedDate = getFormattedDate(taskData.date);

  function handleEditing() {
    if (isEditing) {
      onSubmit(taskData);
      setIsEditing(false);
      // onOpenChange(false);
    } else {
      setIsEditing(true);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="max-h-[80%] max-w-[80%] overflow-y-scroll py-14">
        <DialogHeader
          className="flex cursor-pointer flex-row items-center gap-2"
          onClick={handleEditing}
        >
          <IconComponent className="text-red" />
          <Typography variant="body-label" color="red">
            {buttonText}
          </Typography>
        </DialogHeader>

        {isEditing ? (
          <Textarea
            className={cn("mt-4 border-none p-0 text-md")}
            placeholder="Titolo"
            value={taskData.title}
            autoFocus={true}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
          />
        ) : (
          <Typography
            variant="heading-md"
            color={isEditing ? "primary" : "red"}
            className="mt-4"
          >
            {taskData.title}
          </Typography>
        )}

        <div className="grid w-[50%] grid-cols-2 gap-4">
          <div className="col-span-1 grid grid-rows-3 gap-2">
            <div className="flex h-10 items-center gap-2">
              <Icon.Chart className={cn(iconStyle)} />
              <Typography variant="body-md">Stato</Typography>
            </div>
            <div className="flex h-10 items-center gap-2">
              <Icon.Calendar className={cn(iconStyle)} />
              <Typography variant="body-md">Data di Scadenza</Typography>
            </div>
            <div className="flex h-10 items-center gap-2">
              <Icon.CircleAlert className={cn(iconStyle)} />
              <Typography variant="body-md">Priorità</Typography>
            </div>
          </div>

          <div className="col-span-1 grid grid-rows-3 gap-2">
            {isEditing ? (
              <Select
                disabled={!isEditing}
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
            ) : (
              <Typography variant="body-md">
                {formattedTaskStatusTitle(taskData.status)}
              </Typography>
            )}

            {isEditing ? (
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
            ) : (
              <Typography variant="body-md">{formattedDate}</Typography>
            )}

            {isEditing ? (
              <Select
                disabled={!isEditing}
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
            ) : (
              <PriorityBadge priority={taskData.priority ?? "placeholder"} />
            )}
          </div>
        </div>

        <Typography variant="heading-sm" color="red" className="mt-10">
          Descrizione
        </Typography>

        {isEditing ? (
          <Textarea
            className={cn("mt-4", fieldStyle)}
            placeholder="Scrivi qui"
            value={taskData.content}
            onChange={(e) =>
              setTaskData({ ...taskData, content: e.target.value })
            }
          />
        ) : (
          <Typography variant="body-lg">{taskData.content}</Typography>
        )}

        <Typography variant="heading-sm" color="red" className="mt-10">
          Azioni Rapide
        </Typography>
        <div className="flex items-center gap-2">
          <Button
            startIcon={<Icon.Email className="h-6 w-6" />}
            variant="default"
          >
            Email Dott. Jonh Doe
          </Button>
          <Button startIcon={<Icon.Download className="h-6 w-6" />}>
            Download CV Template
          </Button>
        </div>

        <Typography variant="heading-sm" color="red" className="mt-10">
          Allegati
        </Typography>
        <Dropzone onChange={(files) => setFiles(files)}>
          {/* <Button variant="outlined" className="mt-2">
            {files.length > 0 ? "Replace file" : "Select file"}
          </Button> */}
        </Dropzone>
      </DialogContent>
    </Dialog>
  );
}
