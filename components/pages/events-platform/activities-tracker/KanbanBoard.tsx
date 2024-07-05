"use client";

import { StatusBadge } from "@/components/common/status-badge";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import { IKanbanBoardColumn, IKanbanBoardTask } from "@/types/kanbanBoard";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const mockedTasks = {
  todo: [
    {
      id: "1",
      content: "Send Reminder to confirm actual CV to Mr. Lars Ulrich",
      index: 0,
    },
    {
      id: "2",
      content:
        "Book appointment for privacy module signature with Mrs. Tania Lee",
      index: 1,
    },
  ],
  inProgress: [
    {
      id: "3",
      content: "Collect PubMed link from Mr. James Hetfield",
      index: 2,
    },
  ],
  done: [
    {
      id: "5",
      content: "Collect updated CV document from Mr. Marc Wright",
      index: 4,
    },
    {
      id: "6",
      content: "AsciugCollect updated CV document from Mr. John Doere",
      index: 5,
    },
  ],
  blocked: [
    {
      id: "7",
      content: "Collect updated CV document from Mr. Marc Wright",
      index: 6,
    },
    {
      id: "8",
      content: "Collect updated CV document from Mr. John Doe",
      index: 7,
    },
  ],
};

const KanbanColumns = [
  { title: "To do", id: "todo" },
  { title: "In progress", id: "in-progress" },
  { title: "Done", id: "done" },
  { title: "Blocked", id: "blocked" },
];

export default function KanbanBoard() {
  const [doneTasks, setDoneTasks] = useState([...mockedTasks.done]);
  const [toDoTasks, setToDoTasks] = useState([...mockedTasks.todo]);
  const [blockedTasks, setBlockedTasks] = useState([...mockedTasks.blocked]);
  const [inProgressTasks, setInProgressTasks] = useState([
    ...mockedTasks.inProgress,
  ]);

  function handleDragEnd(result) {
    const { destination, source, draggableId } = result;
    console.log(result);

    if (source.droppableId === destination.droppableId) return;

    // Remove task from source column
    if (source.droppableId === "todo") {
      const remainTasks = removeTaskById(draggableId, toDoTasks);
      setToDoTasks([...remainTasks]);
    }

    if (source.droppableId === "in-progress") {
      setInProgressTasks(removeTaskById(draggableId, inProgressTasks));
    }

    if (source.droppableId === "done") {
      setDoneTasks(removeTaskById(draggableId, doneTasks));
    }

    const task: IKanbanBoardTask = findTaskById(draggableId, [
      ...toDoTasks,
      ...inProgressTasks,
      ...doneTasks,
      ...blockedTasks,
    ]);

    // Add task to destination column
    if (destination.droppableId === "todo") {
      console.log("entra qui todo");
      setToDoTasks([...toDoTasks, task]);
    }

    if (destination.droppableId === "in-progress") {
      console.log("entra qui in-progess");
      setInProgressTasks([...inProgressTasks, task]);
    }

    if (destination.droppableId === "done") {
      console.log("entra qui done");
      setDoneTasks([...doneTasks, task]);
    }
  }

  function findTaskById(id: string, tasks: IKanbanBoardTask[]) {
    return tasks.find((task) => task.id === id) as IKanbanBoardTask;
  }

  function removeTaskById(id: string, tasks: IKanbanBoardTask[]) {
    return tasks.filter((task) => task.id !== id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-4 gap-3 divide-x-2 divide-gray-300 mt-4">
        <KanbanBoardColumn tasks={toDoTasks} title="To do" id="todo" />
        <KanbanBoardColumn
          tasks={inProgressTasks}
          title="In progress"
          id="in-progress"
        />
        <KanbanBoardColumn tasks={blockedTasks} title="Blocked" id="blocked" />
        <KanbanBoardColumn tasks={doneTasks} title="Done" id="done" />
      </div>
    </DragDropContext>
  );
}

function KanbanBoardColumn({ tasks, title, id }: IKanbanBoardColumn) {
  return (
    <div className="px-3">
      <Typography variant="heading-sm" color="primary">
        {title}
      </Typography>

      <Droppable droppableId={id}>
        {(provide) => {
          return (
            <div ref={provide.innerRef} {...provide.droppableProps}>
              {tasks.map((task) => (
                <KanbanBoardTask {...task} key={task.id} />
              ))}
              {provide.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

function KanbanBoardTask({ content, id, index }: IKanbanBoardTask) {
  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(provide) => (
        <div
          className="bg-white p-4 flex-col mt-2"
          ref={provide.innerRef}
          {...provide.draggableProps}
          {...provide.dragHandleProps}
        >
          <div className="flex justify-end">
            <StatusBadge status={"pending"} className="" />
          </div>
          <Typography variant="body-md" color="primary" className="mt-2">
            {content}
          </Typography>
          <Divider />
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-1">
              <Icon.Calendar />
              <Typography variant="body-xs-bold" color="primary">
                26 Sep 2024
              </Typography>
            </div>
            <div className="flex gap-1">
              <div className="flex items-center">
                <Icon.Chat className="w-4 h-4" />
                <p>0</p>
              </div>
              <div className="flex items-center">
                <Icon.Document className="w-4 h-4" />
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
