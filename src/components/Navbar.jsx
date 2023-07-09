import React from "react";
import styles from "../Style/Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search, userlogout } from "../Redux-Store/Home/Action";
import DropDownMenu from "./DropDown";
import { LOGO } from "../constant";

const Navbar = () => {
  const search_item = useSelector((state) => state.search_item);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles.nav}>
      <span className={styles.span1}>
        <ul>
          <li
            onClick={() => {
              navigate("../homepage");
            }}
            className={styles.imageItems}
          >
            <img src={LOGO} alt="" className={styles.logoimg} />
          </li>
          <li
            onClick={() => {
              navigate("../homepage");
            }}
            className={styles.menuItems}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("../tvshows");
            }}
            className={styles.menuItems}
          >
            TV Shows
          </li>
          <li
            onClick={() => {
              navigate("../movies");
            }}
            className={styles.menuItems}
          >
            Movies
          </li>
          
        </ul>
      </span>
      <DropDownMenu />
      <span className={styles.span2}>
        <ul>
          <li>
            <div className={styles.inputdiv}>
              <input
                className={styles.searchBar}
                type="text"
                placeholder="Titles, cast"
                value={search_item}
                onChange={(e) => dispatch(search(e.currentTarget.value))}
              />
              <SearchIcon
                onClick={() => {
                  navigate(`/search/${search_item}`);
                  dispatch(search(""));
                }}
              />
            </div>
          </li>
          <li>
            <div className={styles.notifContainer}>
              <div className={styles.notifDD}>
                <img
                  src="https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png"
                  alt=""
                />
                <span>
                  <p>Netflix Lookahead</p>
                  <p>Explore what's coming soon.</p>
                  <p className={styles.daysAgo}>2 days ago</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.avatarMenuContainer}>
              <img
                src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCZYfPbupvQjzSa3egePk8TFNDy2A_w15DEAq50IqW8MYmOtmbWwN4Txem7mgNYEMPJ1BY6uasiIJQ8JeFO3EU.png?r=b97"
                alt=""
                className={styles.avatarimg}
              />
              <div className={styles.avatarDD}>
                <div>
                  <span>
                    <img
                      src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                      alt=""
                      className={styles.icons}
                    />
                  </span>
                  <span className={styles.names}> User 1</span>
                </div>
                <div>
                  <span>
                    <img
                      src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png?r=f71"
                      alt=""
                      className={styles.icons}
                    />
                  </span>
                  <span className={styles.names}> User 2</span>
                </div>
                <div>
                  <span>
                    <img
                      src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXrmj4H9RUyDiO28L-KJxDGc9oDijd4jnl5RyCkiWMPB6xFxiVdRiKdOcNjG8kn4A3idJRTGAzuBuQ__c6yl1m0.png?r=fcc"
                      alt=""
                      className={styles.icons}
                    />
                  </span>
                  <span className={styles.names}> User 3</span>
                </div>
                <div>
                  <span>
                    <img
                      src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSeeteIa0VRNjiIWgkaD5K6WolibL612PYn_dUdqFSmJjx6VfdOVh-n6WGQ4Gu3d_PXJXcyDq18qae17Q1FZOLg.png?r=5cf"
                      alt=""
                      className={styles.icons}
                    />
                  </span>
                  <span className={styles.names}> Kids</span>
                </div>
                <div>
                  <span>
                    <EditIcon large className={styles.icons} />
                  </span>
                  <span className={styles.names}>Manage Profiles</span>
                </div>
                <hr />
                <div>
                  <span>
                    <AccountCircleIcon className={styles.icons} />
                  </span>
                  <span className={styles.names}>Account</span>
                </div>
                <div>
                  <span>
                    <HelpOutlineIcon className={styles.icons} />
                  </span>
                  <span className={styles.names}>Help Centre</span>
                </div>
                <hr />
                <div
                  onClick={() => {
                    dispatch(userlogout(""));
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                  className={styles.signout}
                >
                  Sign out 
                </div>
              </div>
            </div>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default Navbar;
