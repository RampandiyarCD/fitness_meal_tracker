import { useState } from "react";
import "./Dietplan.css";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Meal {
  id: string;
  name?: string;
  quantity?: number;
  image?: string;
}

interface DietPlanProps {
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  snacks: Meal[];
  totalCalories: number;
  targetCalorie: number;
}

type MealType = "Breakfast" | "Lunch" | "Dinner" | "Snacks";

export default function DietPlan({
  breakfast,
  lunch,
  dinner,
  snacks,
  totalCalories,
  targetCalorie,
}: DietPlanProps) {
  const [activeMealType, setActiveMealType] = useState<MealType>("Breakfast");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const mealTypes: MealType[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  const mealsMap = {
    Breakfast: breakfast,
    Lunch: lunch,
    Dinner: dinner,
    Snacks: snacks,
    TotalCalories: totalCalories,
    TargetCalories: targetCalorie,
  };

  const activeMeals = mealsMap[activeMealType];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activeMeals.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + activeMeals.length) % activeMeals.length
    );
  };

  return (
    <div className="diet">
      <div className="diet-header">
        <p className="diet-text-1">
          <DateRangeRoundedIcon />
          Today
        </p>
        <p className="diet-text-2">Diet Chart Recommended</p>
      </div>

      <div className="diet-schedule">
        <div className="diet-meal">
          <div className="diet-timing" role="tablist">
            {mealTypes.map((mealType) => (
              <p
                key={mealType}
                role="tab"
                aria-selected={activeMealType === mealType}
                className={`diet-label ${
                  activeMealType === mealType ? "active" : ""
                }`}
                onClick={() => setActiveMealType(mealType)}
              >
                {mealType}
              </p>
            ))}
          </div>

          <div className="diet-contain">
            <div className="diet-container">
              {activeMeals.length > 3 && (
                <ChevronLeftIcon
                  sx={{ fontSize: 40 }}
                  onClick={handlePrev}
                  className="diet-slide"
                />
              )}
              {activeMeals.slice(currentIndex, currentIndex + 3).map((meal) => (
                <div className="diet-item" key={meal.id}>
                  <img
                    src={meal.image}
                    alt={meal.name || "Meal"}
                    className="diet-img"
                  />
                  <p className="diet-item-desc">
                    {meal.quantity ?? 1} {meal.name ?? "Item"}
                  </p>
                </div>
              ))}
              {activeMeals.length > 3 && (
                <ChevronRightIcon
                  sx={{ fontSize: 40 }}
                  onClick={handleNext}
                  className="diet-slide"
                />
              )}
            </div>
            <div className="diet-plan">
              <div className="diet-plan-item">
                <p>Target Calories:</p>
                <p className="diet-plan-value">{targetCalorie}</p>
              </div>
              <div className="diet-plan-item">
                <p>Total Calories:</p>
                <p className="diet-plan-value">{totalCalories}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
