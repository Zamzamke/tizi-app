import React from "react";
import styles from "../styles/LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Tizi Fitness</h1>
      <p className={styles.tagline}>Track your fitness journey, one step at a time.</p>
      <button className={styles.button} onClick={() => navigate("/signup")}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
