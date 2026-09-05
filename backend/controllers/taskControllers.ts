import crypto from "node:crypto";

import {tasks} from "../storage/storage.js";

import type {Request,Response} from "express";
import type {Task,TaskBase} from "../types/task.js";

export function getTasksController(req:Request, res:Response<Task[]>){

    return res.status(200).json(tasks);

}

export function addTaskController(req:Request<{},{},TaskBase>, res:Response){

    let body:TaskBase = req.body;
    let newTask:Task = {
        ...body,
        id : crypto.randomUUID(),
        timestamp : Date.now()
    }

    tasks.push(newTask);
    return res.status(201).json(newTask);

}

export function editTaskController(req:Request<{taskID:string},{},TaskBase>, res:Response){

    let taskID:string = req.params.taskID;
    let body:TaskBase = req.body;
    
    let taskIndex = tasks.findIndex((task)=>{
        return task.id === taskID;
    })

    if(taskIndex === -1){
        return res.status(404).send();
    }

    let newTask:Task = {
        ...body,
        id : tasks[taskIndex]!.id,
        timestamp : tasks[taskIndex]!.timestamp
    }

    tasks[taskIndex] = newTask;

    return res.status(200).json(newTask);
}

export function removeTaskController(req:Request<{taskID:string},{},{}>,res:Response){

    let taskID:string = req.params.taskID;

    let taskIndex = tasks.findIndex((task)=>{
        return task.id === taskID;
    })

    if(taskIndex === -1){
        return res.status(404).send();
    }

    tasks.splice(taskIndex,1);

    return res.status(204).send();

}