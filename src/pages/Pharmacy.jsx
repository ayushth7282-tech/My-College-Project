import { useEffect, useState } from "react";
import {
  Pill,
  Clock,
  Trash2,
  CheckCircle,
  PlusCircle,
} from "lucide-react";
import "../styles/FeaturePage.css";

function Pharmacy() {
  const [medicine, setMedicine] = useState({
    name: "",
    dosage: "",
    time: "",
    duration: "",
  });

  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/medicine");
      const data = await res.json();

      setMedicines(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setMedicine({
      ...medicine,
      [e.target.name]: e.target.value,
    });
  };

  const addMedicine = async (e) => {
    e.preventDefault();

    if (
      !medicine.name ||
      !medicine.dosage ||
      !medicine.time ||
      !medicine.duration
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("meditrackUser"));

      const res = await fetch("http://localhost:5000/api/medicine/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...medicine,
          userId: user._id,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Medicine Added Successfully!");

        setMedicines([...medicines, data.medicine]);

        setMedicine({
          name: "",
          dosage: "",
          time: "",
          duration: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  const markTaken = (id) => {
    setMedicines(
      medicines.map((item) =>
        item._id === id
          ? { ...item, taken: !item.taken }
          : item
      )
    );
  };

  const deleteMedicine = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/medicine/${id}`, {
        method: "DELETE",
      });

      setMedicines(
        medicines.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="feature-page">
      <div className="feature-box">

        <h1>💊 Medicine Management</h1>

        <p>Manage medicines, reminders and dosage.</p>

        <form className="medicine-form" onSubmit={addMedicine}>

          <input
            type="text"
            name="name"
            placeholder="Medicine Name"
            value={medicine.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="dosage"
            placeholder="Dosage (1 Tablet)"
            value={medicine.dosage}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={medicine.time}
            onChange={handleChange}
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration (Days)"
            value={medicine.duration}
            onChange={handleChange}
          />

          <button type="submit">
            <PlusCircle size={18} />
            Add Medicine
          </button>

        </form>

        <h2 style={{ marginTop: "40px" }}>
          Today's Medicines
        </h2>

        {medicines.length === 0 ? (
          <div className="empty-card">
            <Pill size={60} color="#14b8a6" />
            <h3>No Medicines Added</h3>
            <p>Add your first medicine reminder.</p>
          </div>
        ) : (
          medicines.map((item) => (
            <div
              className="medicine-card"
              key={item._id}
            >
              <div>

                <h3>{item.name}</h3>

                <p>
                  <Pill size={16} /> {item.dosage}
                </p>

                <p>
                  <Clock size={16} /> {item.time}
                </p>

                <p>
                  Duration : {item.duration} Days
                </p>

                <span
                  className={
                    item.taken
                      ? "status taken"
                      : "status active"
                  }
                >
                  {item.taken ? "Taken" : "Active"}
                </span>

              </div>

              <div className="buttons">

                <button
                  className="taken-btn"
                  onClick={() => markTaken(item._id)}
                >
                  <CheckCircle size={18} />
                  {item.taken ? "Undo" : "Taken"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteMedicine(item._id)}
                >
                  <Trash2 size={18} />
                  Delete
                </button>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Pharmacy;