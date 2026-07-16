import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-text">

        <h2>About MediTrack</h2>

        <p>
          MediTrack is a healthcare platform designed to simplify the way people
          manage their medicines, monitor fitness, and organize medical records.
          Our mission is to bring all your healthcare needs into one secure,
          simple, and intelligent platform.
        </p>

      </div>

      <div className="about-stats">

        <div className="stat-card">
          <h3>3+</h3>
          <p>Core Features</p>
        </div>

        <div className="stat-card">
          <h3>100%</h3>
          <p>Secure Data</p>
        </div>

        <div className="stat-card">
          <h3>24/7</h3>
          <p>Health Companion</p>
        </div>

      </div>

    </section>
  );
}

export default About;