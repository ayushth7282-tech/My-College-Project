import heroImage from "../assets/Doctor.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Your Complete <span>Healthcare</span> Companion
        </h1>

        <p>
          Manage medicines, track your fitness, monitor health reports,
          and stay healthier—all from one smart platform.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Doctor Illustration" />
      </div>

    </section>
  );
}

export default Hero;