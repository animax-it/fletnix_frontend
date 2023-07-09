import { useNavigate } from "react-router-dom";
import styles from "../Style/payment.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  get_signin_error,
  get_signin_loading,
} from "../Redux-Store/Home/Action";
import { BACKENDURL, LOGO } from "../constant";

export const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, age } = useSelector((state) => state);

  const payment = () => {
    if (email === "" || password === "" || age === "") {
      alert("Fill all Credential");
      return;
    }
    const userData = { email, password, age };
    dispatch(get_signin_loading(true));
    dispatch(get_signin_error(false));
    fetch(`${BACKENDURL}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(get_signin_loading(false));
        if (res.authToken) {
          localStorage.setItem("successMessage", "Your account has been created, please login !"); // Store success message in local storage
          navigate("/login");
        } else {
          toast.error("Account already exists, enter new email !"); // Show error toast
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(get_signin_error(true));
        navigate("/");
      });
  };

  return (
    <div className={styles.paymentbig}>
      <ToastContainer />
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <img src={LOGO} alt="" />
          </a>
        </div>
        <a className={styles.signbtn} href="/">
          Sign Out
        </a>
      </div>
      <div className={styles.middlebox}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
          className={styles.lockpic}
          alt=""
        />
        <p>STEP 3 OF 3</p>
        <h2>Set up your payment to unlock all shows</h2>
        <p>Your membership starts as soon as you set up payment.</p>
        <h4>You are all set to go</h4>
        <button onClick={payment} className={styles.btnbox}>
          Done
        </button>
      </div>
    </div>
  );
};
