import { Request, Response } from "express";
import {
  createUserService,
  getUserByIdService,
  loginUserService,
  updateUserService,
} from "../service/userService";
import jwt from "jsonwebtoken";
import { logger } from "../config/logger";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const result = await createUserService(req.body);

    if (result.error) {
      logger.error(result.error);
      return res.sendStatus(400);
    }

    logger.info(result);
    return res.sendStatus(201);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(500);
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const result = await loginUserService(req.body.email, req.body.password);

    if (result.error) {
      logger.error(result.error);
      return res.sendStatus(400);
    }

    const payload = { id: result.id };
    const token = jwt.sign(payload, process.env.SECRET_KEY!, {
      expiresIn: "1d",
    });

    logger.info({ message: "User logged in", userId: result.id });
    return res.status(200).json({ id: result.id, result, token });
  } catch (error) {
    logger.error(error);
    return res.sendStatus(500);
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const result = await updateUserService(req.body, req.params.id);

    if (result.error) {
      logger.error(result.error);
      return res.sendStatus(400);
    }

    logger.info(result);
    return res.sendStatus(200);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(500);
  }
};

export const getUserbyIdController = async (req: Request, res: Response) => {
  try {
    const result = await getUserByIdService(req.params.id);

    if (result.error) {
      logger.error(result.error);
      return res.sendStatus(400);
    }

    logger.info(result);
    return res.status(200).json(result);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(500);
  }
};
