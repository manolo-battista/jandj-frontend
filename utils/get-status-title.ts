import { ITaskStatus } from "@/types/kanban-board";

function formattedTaskStatusTitle(status: ITaskStatus) {
  switch (status) {
    case ITaskStatus.TODO:
      return "Da fare";
    case ITaskStatus.IN_PROGRESS:
      return "In corso";
    case ITaskStatus.BLOCKED:
      return "Bloccate";
    case ITaskStatus.DONE:
      return "Concluse";
    default:
      return "";
  }
}

export { formattedTaskStatusTitle };
