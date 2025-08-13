import { Router } from "express";
import {
  createUserController,
  getUserbyIdController,
  loginUserController,
  updateUserController,
} from "../controller/userController";
import { authentication } from "../middleware/auth";

const router = Router();

router.post("/", createUserController);

router.post("/login", loginUserController);

router.put("/:id", authentication, updateUserController);

router.get("/:id", authentication, getUserbyIdController);

export default router;
