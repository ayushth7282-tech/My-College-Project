import logo from "../assets/icons8-hospital-48.png";
import "../styles/Navigation.css";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const user = localStorage.getItem("meditrackUser");

  const handleLogout = () => {
  localStorage.removeItem("meditrackUser");
  navigate("/");
    };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="MediTrack Logo" />
          <h1>MediTrack</h1>
        </Link>
      </div>

      <div className="nav-links">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="auth-links">
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navigation;