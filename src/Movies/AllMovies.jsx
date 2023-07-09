import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_loading,
  get_movies,
  get_tvshows,
} from "../Redux-Store/Home/Action";
import styles from "../Style/HomePage.module.css";
import PopUp from "../LoginPages/PopUp";
import { BACKENDURL } from "../constant";

export const AllMovies = ({ param }) => {
  const init = 1;
  const [page, setPage] = useState(init);
  const { movies, tv_shows } = useSelector((state) => ({
    movies: state.movies,
    tv_shows: state.tv_shows,
  }));
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(get_loading(true));
    setPage(1);
    fetch(`${BACKENDURL}/api/movie/allshows?page=1&type=${param}`)
      .then((res) => res.json())
      .then((res) => {
        // setMovie(res);
        param === "Movie"
          ? dispatch(get_movies(res))
          : dispatch(get_tvshows(res));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(get_loading(false));
      });
  }, [param]);

  const handleChange = (d) => {
    let p;
    d === "+" ? (p = page + 1) : (p = page - 1);
    console.log("p", p);
    d === "+" ? setPage((p) => p + 1) : setPage((p) => p - 1);
    fetch(`${BACKENDURL}/api/movie/allshows?page=${p}&type=${param}`)
      .then((res) => res.json())
      .then((res) => {
        // setMovie(res);
        param === "Movie"
          ? dispatch(get_movies(res))
          : dispatch(get_tvshows(res));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(get_loading(false));
      });
  };
  return (
    <div className={styles.mainRow}>
      <div className={styles.heading}>
        <h3 className={styles.mainHeading}>Movies</h3>
      </div>
      <div className={styles.rowImages}>
        {param === "Movie"
          ? movies.map((items,i) => {
              return <PopUp key={i} items={items} />;
            })
          : tv_shows.map((items,i) => {
              return <PopUp key={i} items={items} />;
            })}
      </div>
      <div className={styles.pagination}>
        <div
          className={styles.arrow}
          onClick={() => {
            page >= 2 && handleChange("-");
          }}
        >
          {"<"}
        </div>
        <div>{page}</div>
        <div className={styles.arrow} onClick={() => handleChange("+")}>
          {">"}
        </div>
      </div>
    </div>
  );
};
