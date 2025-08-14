import { useEffect, useState } from "react";
import CalorieDisplay from "../../components/calorieDisplay/CalorieDisplay";
import DietPlan from "../../components/dietPlan/Dietplan";
import Extrameal from "../../components/extraMeal/Extrameal";
import Healthybenifits from "../../components/healthyBenefits/Healthybenifits";
import CreateMealModal from "../../components/createModal/CreateMealModal";
import saladImg from "../../assets/salad.png";
import "./Dashboard.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Meal {
  id: string;
  name?: string;
  calories?: number;
  image?: string;
  meal_type?: "breakfast" | "lunch" | "dinner" | "snack";
}

interface User {
  target_calorie?: number;
}

interface Error {
  error: string;
}

interface Calculate {
  totalCalories: number;
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  snacks: Meal[];
}

export default function Dashboard() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [user, setUser] = useState<User>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<Error>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const token = localStorage.getItem("token");

  const getMeals = async (userId: string) => {
    try {
      const res = await fetch(`http://localhost:3000/meals/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        setError({ error: "Failed to Get meals" });
        return;
      }

      const data = await res.json();
      setMeals(data.meals || []);
    } catch {
      setError({ error: "Error Loading Meals" });
      return;
    }
  };

  const getUser = async (userId: string) => {
    try {
      const res = await fetch(`http://localhost:3000/user/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        setError({ error: "Failed to Get User" });
        return;
      }

      const data = await res.json();
      setUser(data.user || null);
    } catch {
      setError({ error: "Error Loading User" });
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      setError({ error: "No User Found" });
      return;
    }
    getMeals(userId);
    getUser(userId);
  }, []);

  const { totalCalories, breakfast, lunch, dinner, snacks }: Calculate =
    meals.reduce(
      (acc, meal) => {
        acc.totalCalories += meal.calories || 0;

        if (meal.meal_type === "breakfast") {
          acc.breakfast.push(meal);
        }
        if (meal.meal_type === "lunch") {
          acc.lunch.push(meal);
        }
        if (meal.meal_type === "dinner") {
          acc.dinner.push(meal);
        }
        if (meal.meal_type === "snack") {
          acc.snacks.push(meal);
        }
        return acc;
      },
      {
        totalCalories: 0,
        breakfast: [] as Meal[],
        lunch: [] as Meal[],
        dinner: [] as Meal[],
        snacks: [] as Meal[],
      }
    );
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % meals.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + meals.length) % meals.length
    );
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Your Diet Planner</h1>
        <button onClick={() => setIsModalOpen(true)} className="dashboard-btn">
          Add your Extra Meal
        </button>
      </div>

      <div className="dashboard-section">
        <div className="dashboard-diet">
          <DietPlan
            breakfast={breakfast}
            lunch={lunch}
            dinner={dinner}
            snacks={snacks}
            totalCalories={totalCalories}
            targetCalorie={user?.target_calorie || 0}
          />
        </div>
        <div className="dashboard-calorie">
          <CalorieDisplay
            targetCalorie={user?.target_calorie || 0}
            totalCalories={totalCalories}
          />
        </div>
        <div className="dashboard-extra-meal">
          <Extrameal snacks={snacks} />
        </div>
      </div>

      <div className="dashboard-section-2">
        <h2 className="benefits">Healthy Benefits</h2>
        <div className="benefits-map">
          <ChevronLeftIcon
            sx={{ fontSize: 40 }}
            onClick={handlePrev}
            className="diet-slide"
          />
          {meals.slice(currentIndex, currentIndex + 3).map((meal) => (
            <Healthybenifits
              key={meal.id}
              image={meal.image || saladImg}
              title={meal.name || "Fresh Salad with Vibrant Vegetables"}
            />
          ))}
          <ChevronRightIcon
            sx={{ fontSize: 40 }}
            onClick={handleNext}
            className="diet-slide"
          />
        </div>
      </div>

      {isModalOpen && (
        <CreateMealModal
          onClose={() => setIsModalOpen(false)}
          onMealCreated={() => {
            const userId = localStorage.getItem("id");
            if (userId) getMeals(userId);
          }}
        />
      )}

      {error && <p className="error">{error.error}</p>}
    </div>
  );
}
