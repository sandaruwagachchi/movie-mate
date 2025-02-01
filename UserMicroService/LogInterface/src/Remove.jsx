import React, { useState } from "react";
import "./Remove.css";

const RemoveAccount = ({ setCurrentPage }) => {
  const [confirmation, setConfirmation] = useState(false);

  const handleRemove = () => {
    setConfirmation(true);
  };

  const confirmDelete = () => {
    alert("Account Removed Successfully!");
    setCurrentPage("login");
  };

  return (
    <div className="remove-container">
      <h2>Are you sure?</h2>
      {!confirmation ? (
        <p className="warning">This action cannot be undone!</p>
      ) : (
        <p className="success">Account successfully removed.</p>
      )}

      {!confirmation ? (
        <>
          <button className="remove-btn" onClick={confirmDelete}>
            Yes, Delete
          </button>
          <button
            className="cancel-btn"
            onClick={() => setCurrentPage("login")}
          >
            No, Go Back
          </button>
        </>
      ) : (
        <button className="go-back-btn" onClick={() => setCurrentPage("login")}>
          Go Back to Login
        </button>
      )}
    </div>
  );
};

export default RemoveAccount;
