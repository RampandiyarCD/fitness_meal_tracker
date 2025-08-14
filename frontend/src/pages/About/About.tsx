import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1 className="about-title">About FitMeal Partner</h1>

      <div className="about-card">
        <h2 className="about-subtitle">Our Mission</h2>
        <p>
          Our mission is to empower individuals to achieve their health and
          wellness goals through personalized, data-driven diet planning. We
          believe that a healthy lifestyle should be accessible, understandable,
          and sustainable for everyone. By providing easy-to-use tools and
          clear, actionable insights, we help you take control of your nutrition
          one meal at a time.
        </p>
      </div>

      <div className="about-card">
        <h2 className="about-subtitle">Our Vision</h2>
        <p>
          We envision a world where technology and nutrition work hand-in-hand
          to prevent lifestyle-related health issues. FitMeal Partner aims to be
          the most trusted and intelligent diet companion, constantly evolving
          to meet the unique needs of our users and helping them build lasting
          healthy habits for a longer, happier life.
        </p>
      </div>

      <div className="about-card">
        <h2 className="about-subtitle">Why Choose Us?</h2>
        <p>
          Unlike generic calorie counters, FitMeal Partner offers a holistic
          approach. We focus not just on calories, but on balanced nutrition
          tailored to your specific goals, whether it's weight loss, muscle
          gain, or simply maintaining a healthy lifestyle. Our platform is built
          on simplicity, accuracy, and supportive community features.
        </p>
      </div>
    </div>
  );
}
