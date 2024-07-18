import { SetStateAction } from "react";

type ITasks = {
  todo: IKanbanBoardTask[];
  done: IKanbanBoardTask[];
  blocked: IKanbanBoardTask[];
  inProgress: IKanbanBoardTask[];
};

type IKanbanBoardColumn = {
  columnTasks: IKanbanBoardTask[];
  allTasks: IKanbanBoardTask[];
  title: string;
  id: string;
  setTasks: React.Dispatch<React.SetStateAction<ITasks>>;
};

type IKanbanBoardTask = {
  id: string;
  title: string;
  content: string;
  status: ITaskStatus;
  priority: ITaskPriority | undefined;
  date: Date | undefined;
  files?: string[];
};

type IDragResult = {
  destination: {
    droppableId: string;
    index: number;
  } | null;
  source: {
    droppableId: string;
    index: number;
  };
  draggableId: string;
};

export enum ITaskStatus {
  TODO = "todo",
  IN_PROGRESS = "inProgress",
  BLOCKED = "blocked",
  DONE = "done",
}

export enum ITaskPriority {
  URGENT = "urgente",
  LOW_PRIORITY = "priorità bassa",
  MEDIUM_PRIORITY = "priorità media",
  HIGHT_PRIORITY = "priorità alta",
}

export type { IKanbanBoardColumn, IKanbanBoardTask, IDragResult, ITasks };
