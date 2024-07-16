import { IKanbanBoardTask } from "@/types/kanbanBoard";

function findTaskById(id: string, tasks: IKanbanBoardTask[]) {
  return tasks.find((task) => task.id === id) as IKanbanBoardTask;
}

function removeTaskById(id: string, tasks: IKanbanBoardTask[]) {
  return tasks.filter((task) => task.id !== id);
}

function reorderTasks(
  endPosition: number,
  task: IKanbanBoardTask,
  arrayToOrder: IKanbanBoardTask[]
) {
  const orderedArray = [...arrayToOrder];
  orderedArray.splice(endPosition, 0, task);
  return orderedArray;
}

export { findTaskById, removeTaskById, reorderTasks };
