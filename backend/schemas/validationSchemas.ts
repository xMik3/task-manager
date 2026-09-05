import {z} from "zod";
import type {TaskBase} from "../types/task.js";

export const TaskBaseSchema: z.ZodType<TaskBase> = z.object({
    title: z.string().min(1),
    description: z.string(),
    status: z.enum(["Pending", "In Progress", "Completed"])
});

export const TaskIdSchema = z.object({
    taskID: z.uuid()
});
