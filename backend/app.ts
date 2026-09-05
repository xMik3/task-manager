import express from "express";
import cors from "cors";

import analyticsRoutes from "./routes/analyticsRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(analyticsRoutes);
app.use(taskRoutes);

export default app;