import { Request, Response } from "express";
import mealRepository from "../repository/mealRepository";
import Meals from "../entity/mealModel";

export const createMealService = async (mealData: Meals, userId: string) => {
  if (!mealData) {
    return { error: "No data passed" };
  }

  const newMeal = mealRepository.create({
    ...mealData,
    user_id: { id: userId },
  });

  const savedMeal = await mealRepository.save(newMeal);

  return {
    message: "Meal created successfully",
    meal: savedMeal,
  };
};

export const getMealsByUserService = async (userId: string) => {
  if (!userId) {
    return { error: "No user ID provided" };
  }
  const meals = await mealRepository.find({
    where: { user_id: { id: userId } },
  });
  console.log(meals);
  if (!meals) {
    return { error: "No meals found for this user" };
  }

  return { message: "Meals retrieved successfully", meals };
};
