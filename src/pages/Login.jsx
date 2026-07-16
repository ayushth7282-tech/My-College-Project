import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

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
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>

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

      <hr />

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          alert("Google Login Successful");
          navigate("/dashboard");
        }}
        onError={() => {
          alert("Google Login Failed");
        }}
      />

      <p>
        Don't have an account?
        <Link to="/register"> Register</Link>
      </p>

    </div>
  );
}

export default Login;