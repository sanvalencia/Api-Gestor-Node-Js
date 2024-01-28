import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import {validateSchema} from "../middlewares/validate.middleware.js";
import {createTaskSchema } from "../schemas/task.schema.js"
const router = Router();

router.get("/task", authRequired, getTasks);
router.get("/task/:id", authRequired, getTask);
router.post("/task", authRequired,validateSchema(createTaskSchema), createTask);
router.delete("/task/:id", authRequired, deleteTask);
router.put("/task/:id", authRequired, updateTask);

export default router;
