type IKanbanBoardColumn = {
  tasks: IKanbanBoardTask[];
  title: string;
  id: string;
};

type IKanbanBoardTask = {
  id: string;
  content: string;
  index: number;
};

export type { IKanbanBoardColumn, IKanbanBoardTask };
