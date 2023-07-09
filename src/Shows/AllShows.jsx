import React, { useState } from "react";
import styles from "../Style/HomePage.module.css";
import PopUp from "../LoginPages/PopUp";
import { useNavigate } from "react-router-dom";
import { BACKENDURL } from "../constant";

export const AllShows = ({ param }) => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);

  React.useEffect(() => {
    fetch(
      `${BACKENDURL}/api/movie/allshows?page=1&pageSize=3&type=${param}`
    )
      .then((res) => res.json())
      .then((res) => {
        setShows(res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={styles.mainRow}>
      <div className={styles.heading}>
        <h3 className={styles.mainHeading}>
          {param === "Movie" ? "Movie" : "Tv Show"}
        </h3>
        <p
          onClick={() => {
            param === "Movie" ? navigate("/movies") : navigate("/tvshows");
          }}
        >
          see more
        </p>
      </div>
      <div className={styles.rowImages}>
        {shows.map((items,i) => {
          return <PopUp key={i} items={items} />;
        })}
      </div>
    </div>
  );
};
