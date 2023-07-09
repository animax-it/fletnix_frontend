import React from "react";
import styles from "../Style/HomePage.module.css";
import Navbar from "../components/Navbar";
import { AllShows } from "../Shows/AllShows";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <AllShows param="TV Show" />
      <AllShows param="Movie" />
    </div>
  );
};
