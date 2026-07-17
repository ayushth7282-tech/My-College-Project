import { useState } from "react";
import "../styles/FeaturePage.css";

function Fitness() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);


  function calculateBMI() {

    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }

    const heightMeter = height / 100;

    const result = (
      weight / (heightMeter * heightMeter)
    ).toFixed(2);

    setBmi(result);
  }


  function getStatus() {

    if (bmi < 18.5)
      return "Underweight";

    if (bmi < 25)
      return "Normal Weight";

    if (bmi < 30)
      return "Overweight";

    return "Obese";
  }


  return (
    <div className="feature-page">

      <div className="feature-box">

        <h1>🏋️ Fitness Tracker</h1>

        <p>
          Track your BMI and monitor your health.
        </p>


        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e)=>setHeight(e.target.value)}
        />


        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
        />


        <button onClick={calculateBMI}>
          Calculate BMI
        </button>


        {
          bmi && (
            <div>
              <h2>BMI: {bmi}</h2>
              <p>{getStatus()}</p>
            </div>
          )
        }


      </div>

    </div>
  );
}

export default Fitness;