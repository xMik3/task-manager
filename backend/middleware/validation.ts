import type {Request,Response,NextFunction} from "express";

import {TaskBaseSchema,TaskIdSchema} from "../schemas/validationSchemas.js";

export function validateTaskBody(req: Request, res: Response, next: NextFunction) {
    const validation = TaskBaseSchema.safeParse(req.body);
    
    if (!validation.success) {
        return res.status(400).send();
    }
    
    req.body = validation.data;

    next();
}

export function validateTaskId(req: Request, res: Response, next: NextFunction) {
    const validation = TaskIdSchema.safeParse(req.params);
    
    if (!validation.success) {
        return res.status(400).send();
    }

    next();
}
