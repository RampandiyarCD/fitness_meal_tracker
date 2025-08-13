import { Request, Response } from "express";
import {
  createUserService,
  getUserByIdService,
  loginUserService,
  updateUserService,
} from "../service/userService";
import jwt from "jsonwebtoken";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const result = await createUserService(req.body);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    return res.status(201).json(result);
  } catch (error) {
    console.error("Create User Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const result = await loginUserService(req.body.email, req.body.password);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    const payload = { id: result.id };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.status(200).json({ id: result.id, result, token });
  } catch (error) {
    console.error("Login User Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const result = await updateUserService(req.body, req.params.id);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error("Update User Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserbyIdController = async (req: Request, res: Response) => {
  try {
    const result = await getUserByIdService(req.params.id);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error("Get User Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
