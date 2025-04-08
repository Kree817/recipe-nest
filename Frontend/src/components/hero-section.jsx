import "../styles/hero-section.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Healthy Smoothie</h1>
        <p>
          Completely delicious, cold, and quick! Experience a new taste of freshness with our best smoothie recipes.
        </p>
        <button className="hero-btn">Find Recipe</button>
      </div>
    </section>
  );
};

export default Hero;
