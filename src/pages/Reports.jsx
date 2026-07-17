import { useState } from "react";
import "../styles/FeaturePage.css";
import {
  FileText,
  Upload,
  Trash2,
  Eye,
  Calendar,
} from "lucide-react";

function Reports() {
  const [form, setForm] = useState({
    name: "",
    type: "Blood Test",
    date: "",
  });

  const [reports, setReports] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addReport = (e) => {
    e.preventDefault();

    if (!form.name || !form.date) {
      alert("Please fill all fields.");
      return;
    }

    setReports([
      {
        id: Date.now(),
        ...form,
      },
      ...reports,
    ]);

    setForm({
      name: "",
      type: "Blood Test",
      date: "",
    });
  };

  const deleteReport = (id) => {
    setReports(reports.filter((item) => item.id !== id));
  };

  return (
    <div className="feature-page">
      <div className="feature-box">

        <div className="page-header">
          <div className="header-icon">
            <FileText size={38} />
          </div>

          <div>
            <h1>Health Reports</h1>
            <p>
              Store and manage all your medical reports
              securely in one place.
            </p>
          </div>
        </div>

        <form
          className="report-form"
          onSubmit={addReport}
        >
          <input
            type="text"
            name="name"
            placeholder="Report Name"
            value={form.name}
            onChange={handleChange}
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option>Blood Test</option>
            <option>X-Ray</option>
            <option>MRI</option>
            <option>CT Scan</option>
            <option>Prescription</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <button type="submit">
            <Upload size={18} />
            Upload
          </button>
        </form>

        {reports.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">
              <FileText size={60} />
            </div>

            <h2>No Reports Found</h2>

            <p>
              Upload your first medical report to
              keep everything organized.
            </p>
          </div>
        ) : (
          <div className="report-list">
            {reports.map((report) => (
              <div
                className="report-card"
                key={report.id}
              >
                <div className="report-info">
                  <h3>{report.name}</h3>

                  <span>{report.type}</span>

                  <p>
                    <Calendar size={16} />
                    {report.date}
                  </p>
                </div>

                <div className="actions">
                  <button>
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() =>
                      deleteReport(report.id)
                    }
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports;