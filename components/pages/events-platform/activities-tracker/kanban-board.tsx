"use client";

import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import {
  IDragResult,
  IKanbanBoardColumn,
  IKanbanBoardTask,
  ITaskPriority,
  ITasks,
  ITaskStatus,
} from "@/types/kanban-board";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { findTaskById, reorderTasks, removeTaskById } from "@/utils/task-utils";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import TaskDetailDialog from "./task-detail-dialog";
import CreateTaskDialog from "./create-task-dialog";
import { getFormattedDate } from "@/utils/get-formatted-date";
import { formattedTaskStatusTitle } from "@/utils/get-status-title";
import { PriorityBadge } from "./priority-badge";

const mockedTasks = {
  todo: [
    {
      id: "1",
      title: "Send Reminder to confirm actual CV to Mr. Lars Ulrich",
      content:
        "Il Curriculum del dott. Ulrich è stato aggiornato l’ultima volta più di un anno fa (il 15 Giu 2021), quindi è considerato obsoleto. Chiedi al dottore se è la versione più aggiornata.",
      priority: ITaskPriority.URGENT,
      status: ITaskStatus.TODO,
      date: new Date(),
    },
    {
      id: "2",
      title:
        "Book appointment for privacy module signature with Mrs. Tania Lee",
      content:
        "Il Curriculum del dott. Ulrich è stato aggiornato l’ultima volta più di un anno fa (il 15 Giu 2021), quindi è considerato obsoleto. Chiedi al dottore se è la versione più aggiornata.",
      priority: ITaskPriority.HIGHT_PRIORITY,
      status: ITaskStatus.TODO,
      date: new Date(),
    },
  ],
  inProgress: [
    {
      id: "3",
      title: "PROVA",
      content:
        "Il Curriculum del dott. Ulrich è stato aggiornato l’ultima volta più di un anno fa (il 15 Giu 2021), quindi è considerato obsoleto. Chiedi al dottore se è la versione più aggiornata.",
      priority: ITaskPriority.LOW_PRIORITY,
      status: ITaskStatus.IN_PROGRESS,
      date: new Date(),
    },
  ],
  done: [
    {
      id: "5",
      title: "Collect updated CV document from Mr. Marc Wright",
      content:
        "Il Curriculum del dott. Ulrich è stato aggiornato l’ultima volta più di un anno fa (il 15 Giu 2021), quindi è considerato obsoleto. Chiedi al dottore se è la versione più aggiornata.",
      priority: ITaskPriority.MEDIUM_PRIORITY,
      status: ITaskStatus.DONE,
      date: new Date(),
    },
    {
      id: "6",
      title: "AsciugCollect updated CV document from Mr. John Doere",
      content:
        "Il Curriculum del dott. Ulrich è stato aggiornato l’ultima volta più di un anno fa (il 15 Giu 2021), quindi è considerato obsoleto. Chiedi al dottore se è la versione più aggiornata.",
      priority: ITaskPriority.URGENT,
      status: ITaskStatus.DONE,
      date: new Date(),
    },
  ],
  blocked: [
    {
      id: "7",
      title: "Collect updated CV document from Mr. Marc Wright",
      content:
        "Il Curriculum del dott. Ulrich è stato aggiornato l’ultima volta più di un anno fa (il 15 Giu 2021), quindi è considerato obsoleto. Chiedi al dottore se è la versione più aggiornata.",
      priority: ITaskPriority.HIGHT_PRIORITY,
      status: ITaskStatus.BLOCKED,
      date: new Date(),
    },
    {
      id: "8",
      title: "Collect updated CV document from Mr. John Doe",
      content:
        "Il Curriculum del dott. Ulrich è stato aggiornato l’ultima volta più di un anno fa (il 15 Giu 2021), quindi è considerato obsoleto. Chiedi al dottore se è la versione più aggiornata.",
      priority: ITaskPriority.LOW_PRIORITY,
      status: ITaskStatus.BLOCKED,
      date: new Date(),
    },
  ],
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<ITasks>({
    todo: [...mockedTasks.todo],
    inProgress: [...mockedTasks.inProgress],
    blocked: [...mockedTasks.blocked],
    done: [...mockedTasks.done],
  });
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const allTasks = [
    ...tasks.todo,
    ...tasks.done,
    ...tasks.blocked,
    ...tasks.inProgress,
  ];

  function handleDragEnd(result: IDragResult) {
    const { destination, source, draggableId } = result;

    const selectedTask: IKanbanBoardTask | undefined = findTaskById(
      draggableId,
      allTasks,
    );

    if (!selectedTask) return;
    if (!destination) return;

    selectedTask.status = destination?.droppableId as ITaskStatus;
    selectedTask.status = destination?.droppableId as ITaskStatus;
    const sourceTasks = tasks[source.droppableId as keyof ITasks];
    const remainedTasks = removeTaskById(draggableId, sourceTasks);

    // If the task is dropped in the same column
    if (source.droppableId === destination.droppableId) {
      const reorderedTasks = reorderTasks(
        destination.index,
        selectedTask,
        remainedTasks,
      );
      setTasks({
        ...tasks,
        [source.droppableId]: reorderedTasks,
      });
      return;
    }

    const destinationTasks = tasks[destination.droppableId as keyof ITasks];
    const reorderedDestinationTasks = reorderTasks(
      destination.index,
      selectedTask,
      destinationTasks,
    );

    setTasks({
      ...tasks,
      [source.droppableId]: remainedTasks,
      [destination.droppableId]: reorderedDestinationTasks,
    });
  }

  function handleCreateNewTask(task: IKanbanBoardTask) {
    const taskID = JSON.stringify(allTasks.length + 2);
    const status = task.status;
    setTasks({
      ...tasks,
      [status]: [...tasks[status], { ...task, id: taskID }],
    });
  }

  return (
    <div className="absolute max-w-full pb-10">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="mt-6 px-3">
          <CreateTaskDialog
            onOpenChange={(open: boolean) =>
              !open && setIsCreateDialogOpen(false)
            }
            onSubmit={handleCreateNewTask}
            trigger={
              <Button
                color="secondary"
                variant="outlined"
                size={"sm"}
                startIcon={<Icon.Add className="h-4 w-4" />}
                onClick={() => setIsCreateDialogOpen(true)}
              >
                Aggiungi una nuova task
              </Button>
            }
          />
        </div>
        <div className="mt-4 flex gap-3 divide-x-2 divide-gray-300 overflow-x-auto overflow-y-hidden">
          {Object.keys(tasks).map((key) => (
            <KanbanBoardColumn
              setTasks={setTasks}
              columnTasks={tasks[key as keyof ITasks]}
              allTasks={allTasks}
              title={formattedTaskStatusTitle(key as ITaskStatus)}
              id={key}
              key={key}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

function KanbanBoardColumn({
  columnTasks,
  allTasks,
  title,
  id,
  setTasks,
}: IKanbanBoardColumn) {
  return (
    <div className="min-w-[300px] px-3">
      <Typography variant="heading-xs" color="primary">
        {title}
      </Typography>

      <Droppable droppableId={id}>
        {(provide) => {
          return (
            <div
              className="h-full"
              ref={provide.innerRef}
              {...provide.droppableProps}
            >
              {columnTasks.map((task: IKanbanBoardTask, index: number) => (
                <KanbanBoardTask
                  {...task}
                  key={task.id}
                  allTasks={allTasks}
                  index={index}
                  columnTasks={columnTasks}
                  setTasks={setTasks}
                />
              ))}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

function KanbanBoardTask({
  index,
  setTasks,
  allTasks,
  columnTasks,
  ...taskProps
}: IKanbanBoardTask & {
  index: number;
  allTasks: IKanbanBoardTask[];
  columnTasks: IKanbanBoardTask[];
  setTasks: React.Dispatch<React.SetStateAction<ITasks>>;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function onDuplicateTask() {
    const newTask = { ...taskProps, id: JSON.stringify(allTasks.length + 2) };
    setTasks((prev) => {
      return {
        ...prev,
        [taskProps.status]: [...columnTasks, newTask],
      };
    });
  }

  function onDeleteTask() {
    const updatedTasks = removeTaskById(taskProps.id, columnTasks);
    setTasks((prev) => {
      return {
        ...prev,
        [taskProps.status]: updatedTasks,
      };
    });
  }

  function onEditTask(editedTask: IKanbanBoardTask) {
    const taskBeforeEdit = findTaskById(editedTask.id, allTasks);
    const isStatusChanged = editedTask.status !== taskBeforeEdit.status;
    const remainedTasks = removeTaskById(editedTask.id, columnTasks);

    if (isStatusChanged) {
      setTasks((prev) => {
        return {
          ...prev,
          // Remove the task from the previous status
          [taskBeforeEdit.status]: remainedTasks,
          // Add the task to the new status
          [editedTask.status]: [...prev[editedTask.status], editedTask],
        };
      });
    } else {
      const updatedTasks = columnTasks.map((task) => {
        if (task.id === editedTask.id) {
          return editedTask;
        }
        return task;
      });
      setTasks((prev) => {
        return {
          ...prev,
          [editedTask.status]: updatedTasks,
        };
      });
    }
  }

  return (
    <>
      <Draggable
        draggableId={taskProps.id}
        key={taskProps.id}
        index={index as number}
      >
        {(provide) => (
          <div
            className="group mt-2 max-h-fit flex-col bg-white p-4"
            ref={provide.innerRef}
            {...provide.draggableProps}
            {...provide.dragHandleProps}
            onClick={() => setIsDialogOpen(true)}
          >
            <div className="flex items-center justify-between">
              <PriorityBadge priority={taskProps.priority ?? "placeholder"} />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Icon.DotsMenu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[150px] bg-white shadow-md">
                  <DropdownMenuItem
                    className="flex min-h-[34px] items-center gap-4 p-2 hover:bg-gray-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDuplicateTask();
                    }}
                  >
                    <Icon.Stationery className="h-4 w-4" />
                    <Typography variant="legal">Duplica</Typography>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex min-h-[34px] items-center gap-4 p-2 hover:bg-gray-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteTask();
                    }}
                  >
                    <Icon.AFib className="h-4 w-4" />
                    <Typography variant="legal">Elimina</Typography>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Typography
              variant="body-md"
              color="primary"
              className="mt-2 group-hover:text-red"
            >
              {taskProps.title}
            </Typography>
            <Divider className="bg-gray-300" />
            <div className="mt-2 flex justify-between">
              <div className="flex items-center gap-1">
                <Icon.Calendar className="h-3 w-3 fill-gray-400" />
                <Typography variant="body-xs-bold" color="primary">
                  {getFormattedDate(taskProps.date)}
                </Typography>
              </div>
              <div className="flex gap-1">
                <div className="flex items-center">
                  <Icon.Document className="mr-1 h-3 w-3 fill-gray-400" />
                  <Typography variant="body-xs-bold" color="primary">
                    {taskProps.files?.length ?? 0}
                  </Typography>
                </div>
              </div>
            </div>
            {/* {children} */}
          </div>
        )}
      </Draggable>
      <TaskDetailDialog
        setOpen={setIsDialogOpen}
        isOpen={isDialogOpen}
        task={taskProps}
        onSubmit={onEditTask}
      />
    </>
  );
}
