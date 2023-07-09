import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  get_error,
  get_loading,
  search_data,
} from "../Redux-Store/Home/Action";
import styles from "../Style/HomePage.module.css";
import PopUp from "../LoginPages/PopUp";
import { CircularProgress } from "@mui/material";
import { BACKENDURL } from "../constant";

export const Search = () => {
  let { q } = useParams();
  const { searchData, loading, error } = useSelector((state) => ({
    searchData: state.searchData,
    loading: state.loading,
    error: state.error,
  }));
  const dispatch = useDispatch();
  const getdata = () => {
    console.log("q", q);
    dispatch(get_loading());
    fetch(`${BACKENDURL}/api/movie/allshows?page=1&search=${q}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        dispatch(search_data(res));
      })
      .catch((err) => {
        console.log(err);
        dispatch(get_error());
      });
  };
  React.useEffect(() => {
    getdata();
  }, [q]);

  if (loading)
    return (
      <div style={{ width: "100px", margin: "auto" }}>
        {" "}
        <CircularProgress />
      </div>
    );
  else if (error) return <h1>Something Went Wrong</h1>;
  else
    return (
      <div className={styles.mainRow}>
        <div className={styles.heading}>
          <h3 className={styles.mainHeading}>Search Result</h3>
        </div>
        <div className={styles.rowImages}>
          {searchData.length > 0 ? (
            searchData.map((items, i) => {
              return <PopUp key={i} items={items} />;
            })
          ) : (
            <div>No Movies Found, Enter Correct Name</div>
          )}
        </div>
      </div>
    );
};
