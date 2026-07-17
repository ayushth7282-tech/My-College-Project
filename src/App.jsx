import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Pharmacy from "./pages/Pharmacy";
import Fitness from "./pages/Fitness";
import Reports from "./pages/Reports";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/pharmacy" element={<Pharmacy />} />

        <Route path="/fitness" element={<Fitness />} />

        <Route path="/reports" element={<Reports />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;