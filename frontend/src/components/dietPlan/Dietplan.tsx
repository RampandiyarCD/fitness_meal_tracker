import "./Dietplan.css";
import milkImg from "../../assets/login.png";
import appleImg from "../../assets/login.png";
import breadImg from "../../assets/login.png";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";

export default function DietPlan() {
  return (
    <div className="diet">
      <div className="diet-header">
        <p className="diet-text-1">
          <DateRangeRoundedIcon />
          Today
        </p>
        <p className="diet-text-2">Diet Chat Recommanded</p>
      </div>
      <div className="diet-schedule">
        <div className="diet-meal">
          <div className="diet-timing">
            <p className="diet-label">8:00am Breakfast</p>
            <p className="diet-label">Lunch</p>
            <p className="diet-label">Dinner</p>
            <p className="diet-label">Snacks</p>
          </div>
          <div className="diet-contain">
            <div className="diet-container">
              <div className="diet-item">
                <img src={milkImg} alt="Milk" className="diet-img" />
                <p className="diet-item-desc">1/2 glass Milk</p>
              </div>
              <div className="diet-item">
                <img src={appleImg} alt="Apple" className="diet-img" />
                <p className="diet-item-desc">1 Apple</p>
              </div>
              <div className="diet-item">
                <img src={breadImg} alt="Bread" className="diet-img" />
                <p className="diet-item-desc">2 Slice of Bread</p>
              </div>
            </div>
            <div className="diet-calorie">
              <p className="diet-calorie-item">Today target : 243 Calorie</p>
              <p className="diet-calorie-item">Your Customise : 367 Calorie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
