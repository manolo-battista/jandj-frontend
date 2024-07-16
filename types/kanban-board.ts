import { IStatus } from "./status";

type IKanbanBoardColumn = {
  tasks: IKanbanBoardTask[];
  title: string;
  id: string;
  onDuplicateTask: (taskID: string) => void;
  onDeleteTask: (taskID: string) => void;
};

type IKanbanBoardTask = {
  id: string;
  content: string;
  status: ITaskStatus;
  priority: IStatus;
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

export type { IKanbanBoardColumn, IKanbanBoardTask, IDragResult };
