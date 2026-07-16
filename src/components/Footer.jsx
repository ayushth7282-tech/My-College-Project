import "../styles/Footer.css";
import logo from "../assets/icons8-hospital-48.png";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="footer-logo">
            <img src={logo} alt="MediTrack Logo" />
            <h2>MediTrack</h2>
          </div>

          <p>
            Your Complete Healthcare Companion.
            Helping you manage medicines,
            fitness and health reports
            all in one place.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 meditrack@gmail.com</p>
          <p>📍 India</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MediTrack. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;