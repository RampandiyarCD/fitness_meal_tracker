import "./CalorieDisplay.css";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";

export default function CalorieDisplay() {
  return (
    <div className="calorie-display">
      <h3 className="calorie-title">
        <LocalFireDepartmentRoundedIcon />
        Calories
      </h3>
      <div className="calorie-round">
        <p className="calorie-text">Today</p>
      </div>
    </div>
  );
}
