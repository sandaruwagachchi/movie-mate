import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = { email: "", password: "" };

    if (!email) {
      formErrors.email = "Email is required!";
    }
    if (!password) {
      formErrors.password = "Password is required!";
    }

    setErrors(formErrors);

    if (formErrors.email === "" && formErrors.password === "") {
      // Hardcoded Admin Login
      if (email === "movie@gmail.com" && password === "1234") {
        navigate("/Admin"); // Admin Page එකට යනවා
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:8090/api/v1/user/login",
          { email, password }
        );

        console.log(response.data);

        if (response.data.message === "Email not exists") {
          alert("Email not exists");
        } else if (response.data.message === "Login Success") {
          navigate("/Home"); // Home Page එකට යනවා
        } else {
          alert("Incorrect Email or Password");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred, please try again.");
      }
    }
  };

  const handleRemoveAccount = async () => {
    if (window.confirm("Are you sure you want to remove your account?")) {
      try {
        const response = await axios.delete(
          `http://localhost:8090/api/v1/user/delete?email=${email}`
        );
        if (response.status === 200) {
          alert("Your account has been removed successfully.");
          // Optionally redirect user to login page after account removal
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while trying to remove your account.");
      }
    }
  };

  return (
    <motion.form
      className="form"
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onSubmit={handleSubmit}
    >
      <h2>Login</h2>

      <motion.input
        type="text"
        placeholder="Email"
        className={`input ${errors.email ? "error" : ""}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        whileFocus={{ scale: 1.05, borderColor: "#3498db" }}
        animate={errors.email ? { x: [0, -5, 5, -5, 5, 0] } : {}}
      />
      {errors.email && (
        <motion.p
          className="error-message fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [10, 0] }}
        >
          {errors.email}
        </motion.p>
      )}

      <motion.input
        type="password"
        placeholder="Password"
        className={`input ${errors.password ? "error" : ""}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        whileFocus={{ scale: 1.05, borderColor: "#3498db" }}
        animate={errors.password ? { x: [0, -5, 5, -5, 5, 0] } : {}}
      />
      {errors.password && (
        <motion.p
          className="error-message fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [10, 0] }}
        >
          {errors.password}
        </motion.p>
      )}

      <motion.button
        type="submit"
        className="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Login
      </motion.button>

      <p className="switch">
        Don't have an account?{" "}
        <span onClick={() => setCurrentPage("register")}>Register</span>
      </p>

      <p className="switch" onClick={() => setCurrentPage("forgot")}>
        Forgot Password?
      </p>

      <p className="switch remove-text" onClick={handleRemoveAccount}>
        Remove Account
      </p>
    </motion.form>
  );
};

export default Login;
