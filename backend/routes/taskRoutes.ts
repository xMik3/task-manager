import express from "express";

import {getTasksController,addTaskController,editTaskController,removeTaskController} from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/tasks",getTasksController);

router.post("/tasks",addTaskController);

router.put("/tasks/:taskID",editTaskController);

router.delete("/tasks/:taskID",removeTaskController);

export default router;