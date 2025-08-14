import { Router } from "express";
import {
  createMealController,
  getMealsByUserController,
} from "../controller/mealController";
import { authentication } from "../middleware/auth";

const router = Router();

router.post("/:id", authentication, createMealController);
router.get("/:id", authentication, getMealsByUserController);

export default router;
