import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/login.png";
import Logo from "../../assets/logo.png";
import "./Login.css";
import { useState, type FormEvent } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  async function loginUser(email: string, password: string) {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem("id", data.id);
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      }
      return data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    let isValid = true;
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    setEmailError("");
    setPassError("");

    if (!email) {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password) {
      setPassError("Please enter your password");
      isValid = false;
    }

    if (!isValid) return;

    try {
      await loginUser(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-image-div">
          <img
            src={LoginImage}
            alt="Login illustration"
            className="login-image"
          />
        </div>
        <div className="login-forms">
          <div className="login-header">
            <img src={Logo} alt="Logo" className="login-logo" />
            <h1 className="login-title">FitMeal Partner</h1>
          </div>
          <h3 className="login-subtitle">Login</h3>
          <form className="login-form" onSubmit={onSubmit}>
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              className="login-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="login-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passError && <p className="error">{passError}</p>}
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="login-footer">
              Don’t have an account?
              <Link className="regis" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
