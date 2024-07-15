"use client";

import { StatusBadge } from "@/components/common/status-badge";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import {
  IDragResult,
  IKanbanBoardColumn,
  IKanbanBoardTask,
} from "@/types/kanbanBoard";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { findTaskById, reorderTasks, removeTaskById } from "@/utils/ taskUtils";
import { IStatus } from "@/types/status";

const mockedTasks = {
  todo: [
    {
      id: "1",
      content: "Send Reminder to confirm actual CV to Mr. Lars Ulrich",
    },
    {
      id: "2",
      content:
        "Book appointment for privacy module signature with Mrs. Tania Lee",
    },
  ],
  inProgress: [
    {
      id: "3",
      content: "Collect PubMed link from Mr. James Hetfield",
    },
  ],
  done: [
    {
      id: "5",
      content: "Collect updated CV document from Mr. Marc Wright",
    },
    {
      id: "6",
      content: "AsciugCollect updated CV document from Mr. John Doere",
    },
  ],
  blocked: [
    {
      id: "7",
      content: "Collect updated CV document from Mr. Marc Wright",
    },
    {
      id: "8",
      content: "Collect updated CV document from Mr. John Doe",
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
    done: [...mockedTasks.done],
    blocked: [...mockedTasks.blocked],
    inProgress: [...mockedTasks.inProgress],
  });

  function handleDragEnd(result: IDragResult) {
    const { destination, source, draggableId } = result;
    const allTasks = [
      ...tasks.todo,
      ...tasks.done,
      ...tasks.blocked,
      ...tasks.inProgress,
    ];

    const selectedTask: IKanbanBoardTask | undefined = findTaskById(
      draggableId,
      allTasks
    );

    if (!selectedTask) return;
    if (!destination) return;

    const sourceTasks = tasks[source.droppableId as keyof ITasks];
    const remainedTasks = removeTaskById(draggableId, sourceTasks);

    // If the task is dropped in the same column
    if (source.droppableId === destination.droppableId) {
      const reorderedTasks = reorderTasks(
        destination.index,
        selectedTask,
        remainedTasks
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
      destinationTasks
    );

    setTasks({
      ...tasks,
      [source.droppableId]: remainedTasks,
      [destination.droppableId]: reorderedDestinationTasks,
    });
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-4 gap-3 divide-x-2 divide-gray-300 mt-4">
        <KanbanBoardColumn tasks={tasks.todo} title="Da fare" id="todo" />
        <KanbanBoardColumn
          tasks={tasks.inProgress}
          title="In corso"
          id="inProgress"
        />
        <KanbanBoardColumn
          tasks={tasks.blocked}
          title="Bloccate"
          id="blocked"
        />
        <KanbanBoardColumn tasks={tasks.done} title="Concluse" id="done" />
      </div>
    </DragDropContext>
  );
}

function KanbanBoardColumn({ tasks, title, id }: IKanbanBoardColumn) {
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
                <KanbanBoardTask {...task} key={task.id} index={index}>
                  {provide.placeholder}
                </KanbanBoardTask>
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
  children,
  index,
}: IKanbanBoardTask & { index: number; children: React.ReactNode }) {
  return (
    <Draggable draggableId={id} key={id} index={index as number}>
      {(provide) => (
        <div
          className="bg-white p-4 flex-col mt-2 max-h-fit"
          ref={provide.innerRef}
          {...provide.draggableProps}
          {...provide.dragHandleProps}
        >
          <StatusBadge status={IStatus.DRAFT} className="" />
          <StatusBadge status={IStatus.APPROVED} className="" />
          <StatusBadge status={IStatus.CANCELLED} className="" />
          <StatusBadge status={IStatus.HIGHT_PRIORITY} className="" />
          <StatusBadge status={IStatus.LOW_PRIORITY} className="capitalize" />
          <StatusBadge
            status={IStatus.MEDIUM_PRIORITY}
            className="capitalize"
          />
          <StatusBadge status={IStatus.HIGHT_PRIORITY} className="capitalize" />
          <StatusBadge status={IStatus.URGENT} className="" />
          <StatusBadge status={IStatus.LIVE} className="" />

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
                <Icon.Document className="w-3 h-3 fill-gray-400" />
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
