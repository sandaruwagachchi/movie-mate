import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import RemoveAccount from "./Remove";
import Home from "./Home";
import Admin from "./Admin"; // Admin Page එක import කරන්න
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <Router>
      <div className="app-container">
        <div className="background-image"></div>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                className="form-container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentPage === "login" && (
                  <Login setCurrentPage={setCurrentPage} />
                )}
                {currentPage === "register" && (
                  <Register setCurrentPage={setCurrentPage} />
                )}
                {currentPage === "forgot" && (
                  <ForgotPassword setCurrentPage={setCurrentPage} />
                )}
                {currentPage === "remove" && (
                  <RemoveAccount setCurrentPage={setCurrentPage} />
                )}
              </motion.div>
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
