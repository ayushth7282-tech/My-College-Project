import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "./Login.css";  

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>MediTrack</h1>
        <p className="subtitle">
          Your health companion
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">
            Login
          </button>

        </form>


        <div className="divider">
          <span>OR</span>
        </div>


        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            try {
              const res = await fetch(
                "http://localhost:5000/api/auth/google",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    credential: credentialResponse.credential,
                  }),
                }
              );

              const data = await res.json();

              if (res.ok) {
                alert("Google Login Successful");
                console.log(data.user);
                navigate("/");
              } else {
                alert(data.message);
              }

            } catch (error) {
              console.log(error);
              alert("Something went wrong");
            }
          }}

          onError={() => {
            alert("Google Login Failed");
          }}
        />


        <p className="register-text">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>


      </div>

    </div>
  );
}

export default Login;