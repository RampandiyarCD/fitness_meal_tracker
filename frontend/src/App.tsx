import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Layout/Layout";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
