import { myDataSource } from "../config/database";
import Meals from "../entity/mealModel";

const mealRepository = myDataSource.getRepository(Meals)

export default mealRepository;