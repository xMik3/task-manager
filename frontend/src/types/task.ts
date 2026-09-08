//same as backend

export type TaskBase = {
    title : string;
    description : string;
    status : TaskStatus;
}

export type Task = TaskBase & {
    id :string;
    timestamp : number;
}

export type TaskStatus = "Pending" | "In Progress" | "Completed";

