import {tasks} from "../storage/storage.js";

import type { Analytics } from "../types/analytics.js";
import type {Request,Response} from "express";


export function getTaskAnalyticsController(req:Request,res:Response<Analytics>){

    let taskCount = tasks.length;

    let pendingCount = 0;
    let inProgressCount = 0;
    let completedCount = 0;

    tasks.forEach(task => {
        let status = task.status;

        if(status === "Pending"){
            pendingCount++;
        }
        else if(status === "In Progress"){
            inProgressCount++;
        }
        else if(status  === "Completed"){
            completedCount++;
        }
    });

    let analytics:Analytics = {
        taskCount : taskCount,
        pendingCount : pendingCount,
        inProgressCount : inProgressCount,
        completedCount : completedCount
    }

    return res.status(200).json(analytics);

}