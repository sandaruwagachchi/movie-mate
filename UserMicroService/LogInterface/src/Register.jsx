import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // Axios import
import "./Register.css"; // Import the updated CSS file

const Register = ({ setCurrentPage }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Validate username (letters only)
    if (!/^[a-zA-Z]+$/.test(username)) {
      newErrors.username = "Username should only contain letters!";
    }

    // Validate email (only Gmail for this case)
    if (!email.includes("@gmail.com")) {
      newErrors.email = "Please enter a valid Gmail address!";
    }

    // Check password match
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    // Check if password is empty
    if (password === "") {
      newErrors.password = "Password cannot be empty!";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  // ✅ Backend API request function
  const saveUser = async (event) => {
    event.preventDefault();

    if (!validate()) {
      console.log("Form has errors!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8090/api/v1/user/save",
        {
          username: username,
          email: email,
          password: password,
        }
      );

      alert("✅ Employee Registration Successful!");
      console.log("Response:", response.data);

      // Clear form after successful submission
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Navigate to Login Page
      setCurrentPage("login");
    } catch (err) {
      console.error("Error:", err);
      alert(
        "❌ Registration Failed! " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="form-frame">
      <form className="form" onSubmit={saveUser}>
        <h2>Register</h2>

        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <motion.p
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errors.username}
            </motion.p>
          )}
        </div>

        <div className="input-container">
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <motion.p
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        <div className="input-container">
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <motion.p
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errors.password}
            </motion.p>
          )}
        </div>

        <div className="input-container">
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <motion.p
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errors.confirmPassword}
            </motion.p>
          )}
        </div>

        <button type="submit" className="button">
          Register
        </button>

        <div className="switch-container">
          <p className="switch">
            Already have an account?{" "}
            <span
              onClick={() => setCurrentPage("login")}
              className="register-link"
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
