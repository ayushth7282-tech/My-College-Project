import "../styles/Features.css";
import { Pill, Dumbbell, FileText } from "lucide-react";
import { Link } from "react-router-dom";

function Features() {
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


        <Link to="/pharmacy" className="card-link">
          <div className="card">

            <div className="icon">
              <Pill size={50} color="#14B8A6" />
            </div>

            <h3>Medicine Management</h3>

            <p>
              Organize medicines, set reminders,
              and never miss your daily doses.
            </p>

          </div>
        </Link>



        <Link to="/fitness" className="card-link">
          <div className="card">

            <div className="icon">
              <Dumbbell size={50} color="#14B8A6" />
            </div>

            <h3>Fitness Tracking</h3>

            <p>
              Monitor BMI, calories,
              workouts and daily health goals.
            </p>

          </div>
        </Link>



        <Link to="/reports" className="card-link">
          <div className="card">

            <div className="icon">
              <FileText size={50} color="#14B8A6" />
            </div>

            <h3>Health Reports</h3>

            <p>
              Store medical reports securely
              and track your health history.
            </p>

          </div>
        </Link>


      </div>

    </section>
  );
}

export default Features;