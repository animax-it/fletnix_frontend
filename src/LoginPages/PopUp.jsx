import React from "react";
import styles from "../Style/PopUp.module.css";

const PopUp = ({ items }) => {
  return (
    <div className={styles.notifications_container}>
      <div style={{backgroundColor:'#39433c'}} className={styles.success}>
        <div className={styles.flex}>
          <div className={styles.flex_shrink_0}></div>
          <div className={styles.success_prompt_wrap}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{color:'#E50914', fontSize:'15px'}} className={styles.success_prompt_heading}>{items.title}</p>
              <p style={{color:'white'}} className={styles.success_prompt_heading}>{items.duration}</p>
            </div>
            <div style={{color:'white'}} className={styles.success_prompt_prompt}>
              <p>{items.description}...</p>
            </div>
            <div style={{color:'white'}} className={styles.success_prompt_prompt}>
              <p>Cast: {items.cast ? items.cast : "NA"}</p>
            </div>
            <div style={{color:'white'}} className={styles.success_prompt_prompt}>
              <p>Director: {items.director ? items.director : "NA"}</p>
            </div>
            <div style={{color:'white'}} className={styles.success_prompt_prompt}>
              <p>{items.date_added}</p>
            </div>

            <div style={{color:'white'}} className={styles.success_prompt_prompt}>
              <p>{items.listed_in}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{color:'white'}} className={styles.success_prompt_prompt}>
                <p>{items.rating}</p>
              </div>
              <div style={{color:'white'}} className={styles.success_prompt_prompt}>
                <p>{items.release_year}</p>
              </div>
            </div>

            <div className={styles.success_button_container}>
              <button type="button" className={styles.success_button_main}>
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
