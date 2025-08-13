import CalorieDisplay from "../../components/calorieDisplay/CalorieDisplay";
import DietPlan from "../../components/dietPlan/Dietplan";
import Extrameal from "../../components/extraMeal/Extrameal";
import Healthybenifits from "../../components/healthyBenefits/Healthybenifits";
import "./Dashboard.css";
import saladImg from "../../assets/salad.png";

interface Benefit {
  image: string;
  title: string;
}
const benefits: Benefit[] = [
  { image: saladImg, title: "Fresh Salad with Vibrant Vegetables" },
  { image: saladImg, title: "Healthy Dried Fruits and Nuts Mix" },
  { image: saladImg, title: "Vibrant Leafy Salad with Bell Peppers" },
  { image: saladImg, title: "Refreshing Splashing Water" },
  { image: saladImg, title: "Colorful Salad with Fresh Vegetables" },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Your Diet Planner</h1>
        <button className="dashboard-btn">Add your Extra Meal</button>
      </header>

      <section className="dashboard-section">
        <div className="dashboard-diet">
          <DietPlan />
        </div>
        <div className="dashboard-calorie">
          <CalorieDisplay />
        </div>
        <div className="dashboard-extra-meal">
          <Extrameal />
        </div>
      </section>

      <section className="dashboard-section-2">
        <h2 className="benefits">Healthy Benifits</h2>
        <div className="benefits-map">
          {benefits.map((b) => (
            <Healthybenifits key={b.title} image={b.image} title={b.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
