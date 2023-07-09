import React from "react";
import { AllMovies } from "./AllMovies";
import styles from "../Style/HomePage.module.css";
import Navbar from "../components/Navbar";

export const Movies = ({ param }) => {
  return (
    <div className={styles.movies}>
      <Navbar />
      <AllMovies param={param} />
    </div>
  );
};
