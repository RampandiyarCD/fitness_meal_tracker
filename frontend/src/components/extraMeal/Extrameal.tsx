import "./Extrameal.css";

interface Meal {
  id: string;
  name?: string;
  calories?: number;
  quantity?: number;
}

interface ExtraMealProps {
  snacks: Meal[];
}

export default function ExtraMeal({ snacks }: ExtraMealProps) {
  return (
    <div className="extra-meal">
      <h3 className="extra-meal-header">Today's Extra Snacks</h3>
      <div className="extra-meal-list">
        {snacks.length > 0 ? (
          snacks.map((snack) => (
            <div className="extra-meal-card" key={snack.id}>
              <h4 className="extra-meal-title">{snack.name}</h4>
              <p className="extra-meal-calories">{snack.calories} calories</p>
            </div>
          ))
        ) : (
          <p>No snacks added today.</p>
        )}
      </div>
    </div>
  );
}
