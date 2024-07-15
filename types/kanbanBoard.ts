type IKanbanBoardColumn = {
  tasks: IKanbanBoardTask[];
  title: string;
  id: string;
};

type IKanbanBoardTask = {
  id: string;
  content: string;
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

export type { IKanbanBoardColumn, IKanbanBoardTask, IDragResult };
