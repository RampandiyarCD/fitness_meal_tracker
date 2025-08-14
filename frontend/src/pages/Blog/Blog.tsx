import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog">
      <h1 className="blog-title">The FitMeal Blog</h1>

      <div className="blog-list">
        <div className="blog-card">
          <div className="blog-card-content">
            <h3 className="blog-card-title">
              The Top 5 Superfoods for a Healthier You
            </h3>
            <p className="blog-card-excerpt">
              Discover the powerhouse foods packed with vitamins, minerals, and
              antioxidants that can boost your energy levels and overall
              well-being...
            </p>
            <a href="#" className="blog-card-link">
              Read More &rarr;
            </a>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-card-content">
            <h3 className="blog-card-title">
              Hydration Myths Debunked: How Much Water Do You Really Need?
            </h3>
            <p className="blog-card-excerpt">
              We dive into the science behind hydration, separating fact from
              fiction to help you understand your body's true water
              requirements...
            </p>
            <a href="#" className="blog-card-link">
              Read More &rarr;
            </a>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-card-content">
            <h3 className="blog-card-title">
              Pairing Your Diet with the Right Exercise
            </h3>
            <p className="blog-card-excerpt">
              Nutrition is only half the battle. Learn how to effectively
              combine your diet plan with the best exercises for your fitness
              goals...
            </p>
            <a href="#" className="blog-card-link">
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
