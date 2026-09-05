import express from "express";

import {getTasksController,addTaskController,editTaskController,removeTaskController} from "../controllers/taskControllers.js";
import {validateTaskBody,validateTaskId} from "../middleware/validation.js";

const router = express.Router();

router.get("/tasks",getTasksController);

router.post("/tasks",validateTaskBody,addTaskController);

router.put("/tasks/:taskID",validateTaskId,validateTaskBody,editTaskController);

router.delete("/tasks/:taskID",validateTaskId,removeTaskController);

export default router;