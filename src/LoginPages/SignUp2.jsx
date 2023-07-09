import React from "react";
import styles from "../Style/SignUp2.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_age, get_email, get_password } from "../Redux-Store/Home/Action";
import { LOGO } from "../constant";

const SignUp2 = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const age = useSelector((state) => state.age);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addUserCredential = () => {
    if (password === "" || email === "" || age === "") {
      navigate("/signup2");
    } else {
      navigate("/payment");
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <img src={LOGO} alt="" />
          </a>
        </div>
        <Link className={styles.signbtn} to="/login">
          Sign In
        </Link>
      </div>
      <div className={styles.middlebox}>
        <p>STEP 2 OF 3</p>
        <h2>Create a password to start your membership</h2>
        <p>Just a few more steps and you're done!</p>
        <form action="">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => dispatch(get_email(e.currentTarget.value))}
            required
          />
          <input
            type="password"
            placeholder="Add a password"
            value={password}
            onChange={(e) => dispatch(get_password(e.currentTarget.value))}
            required
          />
          <input
            type="number"
            placeholder="Enter a age"
            value={age}
            onChange={(e) => dispatch(get_age(e.currentTarget.value))}
            required
          />
          <button onClick={addUserCredential}>Next</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp2;
