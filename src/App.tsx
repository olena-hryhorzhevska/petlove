import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import News from "./pages/News/News";
import Friends from "./pages/Friends/Friends";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/news" element={<News />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
