import React from "react";
import styles from "../Style/Email.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_email } from "../Redux-Store/Home/Action";
import { LOGO } from "../constant";

export const Email = () => {
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getStarted = () => {
    if (email === "") {
      alert("ADD EMAIL ADDRESS");
    } else {
      navigate("/SignUp");
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.emailDiv}>
        <div className={styles.nav}>
          <div>
            <img className={styles.logo} src={LOGO} alt="" />
          </div>
          <div className={styles.buttons}>
         
            <button
              onClick={() => navigate("/login")}
              className={styles.signinButton}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className={styles.emailHeading}>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
           Enter your email to create your
            membership.
          </h3>
        </div>
        <div className={styles.mailDiv}>
          <Box
          
            noValidate
            autoComplete="off"
            className={styles.mail}
          >
            <TextField
              type="email"
              value={email}
              onChange={(e) => dispatch(get_email(e.currentTarget.value))}
              id="filled-basic"
              label="Email Address"
              variant="standard"
              color="grey"
            
              sx={{ input: { color: "white" }, label: { color: "white" } }}
              InputProps={{
                disableUnderline: true, 
              }}
            />
          </Box>
          <button onClick={getStarted} className={styles.getStarted}>
            Get Started {">"}
          </button>
        </div>
      </div>
      <div className={styles.horizontal}></div>
    </div>
  );
};
