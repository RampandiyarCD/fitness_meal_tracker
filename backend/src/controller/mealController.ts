import { Request, Response } from "express";
import {
  createMealService,
  getMealsByUserService,
} from "../service/mealService";
import { logger } from "../config/logger";

export const createMealController = async (req: Request, res: Response) => {
  try {
    const result = await createMealService(req.body, req.params.id);

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

export const getMealsByUserController = async (req: Request, res: Response) => {
  try {
    const result = await getMealsByUserService(req.params.id);

    if (result.error) {
      logger.error(result.error);
      return res.sendStatus(400);
    }
    logger.info(result);
    return res.status(201).json(result);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(500);
  }
};
