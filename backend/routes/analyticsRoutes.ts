import express from "express";

import {getTaskAnalyticsController} from "../controllers/analyticsControllers.js"

const router = express.Router();

router.get("/tasks/analytics",getTaskAnalyticsController);

export default router;