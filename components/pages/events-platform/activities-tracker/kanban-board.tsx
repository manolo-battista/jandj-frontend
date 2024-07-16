"use client";

import { StatusBadge } from "@/components/common/status-badge";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import {
  IDragResult,
  IKanbanBoardColumn,
  IKanbanBoardTask,
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
import { IStatus } from "@/types/status";

const mockedTasks = {
  todo: [
    {
      id: "1",
      content: "Send Reminder to confirm actual CV to Mr. Lars Ulrich",
      priority: IStatus.URGENT,
      status: ITaskStatus.TODO,
    },
    {
      id: "2",
      content:
        "Book appointment for privacy module signature with Mrs. Tania Lee",
      priority: IStatus.HIGHT_PRIORITY,
      status: ITaskStatus.TODO,
    },
  ],
  inProgress: [
    {
      id: "3",
      content: "PROVA",
      priority: IStatus.LOW_PRIORITY,
      status: ITaskStatus.IN_PROGRESS,
    },
  ],
  done: [
    {
      id: "5",
      content: "Collect updated CV document from Mr. Marc Wright",
      priority: IStatus.MEDIUM_PRIORITY,
      status: ITaskStatus.DONE,
    },
    {
      id: "6",
      content: "AsciugCollect updated CV document from Mr. John Doere",
      priority: IStatus.URGENT,
      status: ITaskStatus.DONE,
    },
  ],
  blocked: [
    {
      id: "7",
      content: "Collect updated CV document from Mr. Marc Wright",
      priority: IStatus.HIGHT_PRIORITY,
      status: ITaskStatus.BLOCKED,
    },
    {
      id: "8",
      content: "Collect updated CV document from Mr. John Doe",
      priority: IStatus.LOW_PRIORITY,
      status: ITaskStatus.BLOCKED,
    },
  ],
};

type ITasks = {
  todo: IKanbanBoardTask[];
  done: IKanbanBoardTask[];
  blocked: IKanbanBoardTask[];
  inProgress: IKanbanBoardTask[];
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<ITasks>({
    todo: [...mockedTasks.todo],
    inProgress: [...mockedTasks.inProgress],
    blocked: [...mockedTasks.blocked],
    done: [...mockedTasks.done],
  });
  const allTasks = [
    ...tasks.todo,
    ...tasks.done,
    ...tasks.blocked,
    ...tasks.inProgress,
  ];

  const getColumnTitle = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return "Da fare";
      case "inProgress":
        return "In corso";
      case "blocked":
        return "Bloccate";
      case "done":
        return "Concluse";
      default:
        return "";
    }
  };

  function handleDragEnd(result: IDragResult) {
    const { destination, source, draggableId } = result;

    const selectedTask: IKanbanBoardTask | undefined = findTaskById(
      draggableId,
      allTasks,
    );

    if (!selectedTask) return;
    if (!destination) return;

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

  function handleDuplicateTask(taskID: string) {
    const task = findTaskById(taskID, allTasks);
    if (!task) return;
    const newTask = { ...task, id: JSON.stringify(allTasks.length + 2) };

    setTasks({
      ...tasks,
      [task.status]: [...tasks[task.status], newTask],
    });
  }

  function handleDeliteTask(taskID: string) {
    const task = findTaskById(taskID, allTasks);
    if (!task) return;

    const updatedTasks = removeTaskById(taskID, tasks[task.status]);
    setTasks({
      ...tasks,
      [task.status]: updatedTasks,
    });
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Button
        color="secondary"
        variant="outlined"
        startIcon={<Icon.Add />}
        className="ml-3 mt-6"
        onClick={() => console.log("Add new task")}
      >
        Aggiungi una nuova task
      </Button>
      <div className="grid grid-cols-4 gap-3 divide-x-2 divide-gray-300 mt-4">
        {Object.keys(tasks).map((key) => (
          <KanbanBoardColumn
            tasks={tasks[key as keyof ITasks]}
            title={getColumnTitle(key)}
            id={key}
            key={key}
            onDuplicateTask={(taskID: string) => handleDuplicateTask(taskID)}
            onDeleteTask={(taskID: string) => handleDeliteTask(taskID)}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

function KanbanBoardColumn({
  tasks,
  title,
  id,
  onDeleteTask,
  onDuplicateTask,
}: IKanbanBoardColumn) {
  return (
    <div className="px-3">
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
              {tasks.map((task, index) => (
                <KanbanBoardTask
                  {...task}
                  key={task.id}
                  index={index}
                  onDuplicateTask={() => onDuplicateTask(task.id)}
                  onDeleteTask={() => onDeleteTask(task.id)}
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
  content,
  id,
  priority,
  index,
  onDuplicateTask,
  onDeleteTask,
}: IKanbanBoardTask & {
  index: number;
  onDuplicateTask: () => void;
  onDeleteTask: () => void;
}) {
  return (
    <Draggable draggableId={id} key={id} index={index as number}>
      {(provide) => (
        <div
          className="bg-white p-4 flex-col mt-2 max-h-fit"
          ref={provide.innerRef}
          {...provide.draggableProps}
          {...provide.dragHandleProps}
        >
          <div className="flex justify-between items-center">
            <StatusBadge status={priority} className="capitalize" />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Icon.DotsMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-[150px] shadow-md ">
                <DropdownMenuItem
                  className="flex gap-4 items-center min-h-[34px] hover:bg-gray-200 p-2"
                  onClick={onDuplicateTask}
                >
                  <Icon.Stationery className="w-4 h-4" />
                  <Typography variant="legal">Duplica</Typography>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex gap-4 items-center min-h-[34px] hover:bg-gray-200 p-2"
                  onClick={onDeleteTask}
                >
                  <Icon.AFib className="w-4 h-4" />
                  <Typography variant="legal">Elimina</Typography>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Typography variant="body-md" color="primary" className="mt-2">
            {content}
          </Typography>
          <Divider className="bg-gray-300" />
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-1">
              <Icon.Calendar className="w-3 h-3 fill-gray-400" />
              <Typography variant="body-xs-bold" color="primary">
                26 Sep 2024
              </Typography>
            </div>
            <div className="flex gap-1">
              <div className="flex items-center">
                <Icon.Document className="w-3 h-3 fill-gray-400 mr-1" />
                <Typography variant="body-xs-bold" color="primary">
                  0
                </Typography>
              </div>
            </div>
          </div>
          {/* {children} */}
        </div>
      )}
    </Draggable>
  );
}
