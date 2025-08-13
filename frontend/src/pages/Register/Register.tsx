import Reg1 from "../../assets/reg1.png";
import Reg2 from "../../assets/reg2.png";
import Logo from "../../assets/logo.png";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");

  async function registerUser(name: string, email: string, password: string) {
    try {
      const response = await fetch("http://localhost:3000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        setError("Something Went Wrong");
      }

      const data = await response.json();
      setError("");
      return data;
    } catch {
      setError("registration failed:");
      return;
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let isValid = true;

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }

    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    registerUser(name, email, password);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-image-div">
          <img src={Reg1} alt="Healthy food" className="register-image" />
        </div>

        <div className="register-forms">
          <div className="register-header">
            <img src={Logo} alt="FitMeal Logo" className="register-logo" />
            <h1 className="register-title">FitMeal Partner</h1>
          </div>
          <h2 className="register-subtitle">Create an Account</h2>
          {error && <p className="error">{error}</p>}
          <form className="register-form" onSubmit={onSubmit}>
            <div className="register-field">
              <input
                type="text"
                className="register-input"
                placeholder="Username"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <small className="error">{nameError}</small>}
            </div>

            <div className="register-field">
              <input
                type="text"
                className="register-input"
                placeholder="E-mail"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <small className="error">{emailError}</small>}
            </div>

            <div className="register-field">
              <input
                type="password"
                className="register-input"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <small className="error">{passwordError}</small>
              )}
            </div>

            <div className="register-field">
              <input
                type="password"
                className="register-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && (
                <small className="error">{confirmPasswordError}</small>
              )}
            </div>

            <button type="submit" className="register-button">
              Sign-up
            </button>
          </form>

          <p className="register-footer">
            Yes I have an account?{" "}
            <Link className="log" to="/">
              Login
            </Link>
          </p>
        </div>

        <div className="register-image-div2">
          <img src={Reg2} alt="Healthy food" className="register-image" />
        </div>
      </div>
    </div>
  );
}
