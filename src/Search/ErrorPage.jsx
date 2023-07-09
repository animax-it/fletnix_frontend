import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Style/ErrorPage.module.css";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.errorPageBody}>
      <div className={styles.errorNav}>
        <img
          src="https://www.netflix.com/browse"
          alt=""
          className={styles.logoimg}
        />
      </div>
      <div className={styles.paraError}>
        <h1>Lost Your Way?</h1>
        <h3>
          Sorry We can't find that Page.You will find lot to explore on the Home
          Page
        </h3>
        <button onClick={() => navigate("homepage")}>GO TO HOME</button>
        <h2>ERROR CODE NSES-404</h2>
      </div>
    </div>
  );
};
