import { useState } from "react";
import "./CreateModal.css";

interface CreateMealModalProps {
  onClose: () => void;
  onMealCreated: () => void;
}

interface MealData {
  name: string;
  userId: string;
  calories: number;
  meal_type: string;
  time: string;
  date: string;
}

export default function CreateMealModal({
  onClose,
  onMealCreated,
}: CreateMealModalProps) {
  const [name, setName] = useState<string>("");
  const [calories, setCalories] = useState<string>("");
  const [meal_type, setMealType] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [error, setError] = useState<string>("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId || !token) {
      setError("You must be logged in to add a meal.");
      return;
    }

    const mealData: MealData = {
      name,
      userId: userId,
      calories: Number(calories),
      meal_type,
      time: "11:00 AM",
      date: new Date().toLocaleDateString(),
    };

    try {
      const res = await fetch(`http://localhost:3000/meals/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(mealData),
      });

      if (res.ok) {
        setName("");
        setCalories("");
        setMealType("");
        setTime("");
        setError("");
        onMealCreated();
        onClose();
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Failed to create meal.");
      }
    } catch {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="modal-title">Add an Extra Meal</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            placeholder="Snack Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="modal-input"
          />

          <label className="modal-input">
            Meal Type
            <select
              className="modal-select"
              value={meal_type}
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </select>
          </label>

          <label className="modal-input">
            Timing
            <select
              className="modal-select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select</option>
              <option value="8:00 AM">8:00am - 11:00am</option>
              <option value="1:00 PM">1:00pm - 4:00 pm</option>
              <option value="8:00 PM">8:00pm - 10pm</option>
              <option value="11:00 AM">11:00:am - 1:00pm</option>
            </select>
          </label>

          <input
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
            className="modal-input"
          />
          <button
            type="submit"
            className="modal-submit"
            disabled={!name || !calories}
          >
            Add Snack
          </button>
          {error && <p className="modal-error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
