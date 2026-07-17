import "../styles/Features.css";
import { Pill, Dumbbell, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    const user = localStorage.getItem("meditrackUser");

    if (!user) {
      navigate("/login");
      return;
    }

    navigate(path);
  };

  return (
    <section className="features" id="features">

      <div className="features-heading">
        <h2>Everything You Need For Better Health</h2>
        <p>
          MediTrack combines medicine management, fitness tracking,
          and health reports into one easy-to-use platform.
        </p>
      </div>

      <div className="feature-cards">

        <div
          className="card"
          onClick={() => handleNavigation("/pharmacy")}
        >
          <div className="icon">
            <Pill size={50} color="#14B8A6" />
          </div>

          <h3>Medicine Management</h3>

          <p>
            Organize medicines, set reminders,
            and never miss your daily doses.
          </p>
        </div>

        <div
          className="card"
          onClick={() => handleNavigation("/fitness")}
        >
          <div className="icon">
            <Dumbbell size={50} color="#14B8A6" />
          </div>

          <h3>Fitness Tracking</h3>

          <p>
            Monitor BMI, calories,
            workouts and daily health goals.
          </p>
        </div>

        <div
          className="card"
          onClick={() => handleNavigation("/reports")}
        >
          <div className="icon">
            <FileText size={50} color="#14B8A6" />
          </div>

          <h3>Health Reports</h3>

          <p>
            Store medical reports securely
            and track your health history.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;