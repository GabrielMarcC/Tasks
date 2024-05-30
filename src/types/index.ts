export interface KanbanBoard {
  id?: string;
  name: string;
  userId: string;
  createdAt?: Date;
  task?: Task[];
}

export type Task = {
  id: string;
  name: string;
  status: Status;
  board: KanbanBoard;
  boardId: string;
  createdAt: Date;
};

enum Status {
  TODO = "TODO",
  IN_PROGRESS = "INPROGRESS",
  DONE = "DONE",
}
