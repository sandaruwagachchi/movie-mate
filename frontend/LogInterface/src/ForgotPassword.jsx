import React from "react";
import "./ForgotPassword.css"; // Specific CSS for Forgot Password page

const ForgotPassword = ({ setCurrentPage }) => {
  return (
    <form className="form">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        className="input"
        onChange={(e) => console.log("Email input:", e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        className="input"
        onChange={(e) => console.log("New Password input:", e.target.value)}
      />
      <button
        type="button"
        className="button"
        onClick={() => console.log("Submit button clicked")}
      >
        Submit
      </button>
      <p className="switch" onClick={() => setCurrentPage("login")}>
        Back to Login
      </p>
    </form>
  );
};

export default ForgotPassword;
