import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
} from "@mui/x-charts/Gauge";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import "./CalorieDisplay.css";

interface CalorieDisplayProps {
  targetCalorie: number;
  totalCalories: number;
}

export default function CalorieDisplay({
  targetCalorie,
  totalCalories,
}: CalorieDisplayProps) {
  const maxCalorie = targetCalorie > 0 ? targetCalorie : 2000;

  return (
    <div className="calorie-display">
      <h3 className="calorie-title">
        <LocalFireDepartmentIcon />
        Calorie Tracker
      </h3>

      <GaugeContainer
        width={250}
        height={170}
        startAngle={-110}
        endAngle={110}
        value={totalCalories}
        valueMin={0}
        valueMax={maxCalorie}
      >
        <GaugeReferenceArc />
        <GaugeValueArc style={{ fill: "green" }} />
      </GaugeContainer>

      <p className="calorie-text">
        {totalCalories} / {maxCalorie} kcal
      </p>
    </div>
  );
}
