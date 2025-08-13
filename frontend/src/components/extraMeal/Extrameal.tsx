import "./Extrameal.css";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";

export default function ExtraMeal() {
  return (
    <div className="extra-meal">
      <div className="extra-meal-header">
        <h3 className="extra-meal-title">Today Extra Meal</h3>
        <p className="extra-meal-date">
          <DateRangeRoundedIcon />
          14:02:2025
        </p>
      </div>
      <div className="extra-meal-list">
        <div className="extra-meal-item">
          <div className="extra-meal-card">
            <h4 className="extra-meal-ctitle">Snacks:</h4>
            <p className="extra-meal-desc">Potto Chips</p>
            <p className="extra-meal-calories">536 calories</p>
          </div>
          <div className="extra-meal-card">
            <h4 className="extra-meal-ctitle">Coffee:</h4>
            <p className="extra-meal-desc">250 ml</p>
            <p className="extra-meal-calories">150 calories</p>
          </div>
        </div>
        <div className="extra-meal-card">
          <h4 className="extra-meal-ctitle">Samosa:</h4>
          <p className="extra-meal-desc">40 grms</p>
          <p className="extra-meal-calories">174 calories</p>
        </div>
      </div>
    </div>
  );
}
