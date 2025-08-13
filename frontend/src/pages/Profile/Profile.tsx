import { useEffect, useState } from "react";
import "./Profile.css";

interface User {
  user: {
    name: string;
    email: string;
    scope: string;
    height: string;
    weight: string;
    eating_habit: string;
    target: string;
  };
}

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [eating_habit, setHabit] = useState("");
  const [target, setTargetWeight] = useState("");
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function getUser(userId: string) {
    try {
      const res = await fetch(`http://localhost:3000/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }

      const data: User = await res.json();
      const { user } = data;

      setName(user.name || "");
      setEmail(user.email || "");
      setScope(user.scope || "");
      setHeight(user.height || "");
      setWeight(user.weight || "");
      setHabit(user.eating_habit || "");
      setTargetWeight(user.target || "");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      getUser(id);
    } else {
      console.error("No user ID found in localStorage");
    }
  },[]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const userId = localStorage.getItem("id");
    if (!userId) {
      setError("No user ID found");
      setSuccess("");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          email,
          scope,
          height,
          weight,
          eating_habit,
          target,
        }),
      });

      if (!res.ok) {
        setError("Something went wrong");
        setSuccess("");
        return;
      }

      const updatedUser = await res.json();
      console.log("Updated User:", updatedUser);

      setError("");
      setSuccess("User updated successfully");
    } catch (err) {
      console.error(err);
      setError("Error updating profile");
      setSuccess("");
    }
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <h1 className="profile-title">My Profile</h1>
        <form className="profile-form" onSubmit={handleUpdate}>
          <label className="profile-label">
            Name
            <input
              className="profile-input"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="profile-label">
            Email
            <input
              className="profile-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="profile-label">
            Scope
            <select
              className="profile-select"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Weight loss">Weight loss</option>
              <option value="Weight gain">Weight gain</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </label>

          <label className="profile-label">
            Height (cm)
            <input
              className="profile-input"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>

          <label className="profile-label">
            Weight (kg)
            <input
              className="profile-input"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>

          <label className="profile-label">
            Eating Habit
            <select
              className="profile-select"
              value={eating_habit}
              onChange={(e) => setHabit(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Veg">Veg</option>
              <option value="Non-veg">Non-veg</option>
            </select>
          </label>

          <label className="profile-label">
            Target Weight (kg)
            <input
              className="profile-input"
              type="number"
              value={target}
              onChange={(e) => setTargetWeight(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="profile-button"
            disabled={
              !name ||
              !email ||
              !scope ||
              !height ||
              !weight ||
              !target ||
              !eating_habit
            }
          >
            Edit Profile
          </button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </div>
  );
}
