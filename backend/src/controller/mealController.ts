import { Request, Response } from "express";
import {
  createMealService,
  getMealsByUserService,
} from "../service/mealService";

export const createMealController = async (req: Request, res: Response) => {
  try {
    const result = await createMealService(req.body, req.params.id);

    if (result.error) {
      return res.status(400).json({ error: "Something went wrong" });
    }

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMealsByUserController = async (req: Request, res: Response) => {
  try {
    const result = await getMealsByUserService(req.params.id);

    if (result.error) {
      return res.status(400).json({ error: "Something went wrong" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
