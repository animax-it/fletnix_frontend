import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import SignUp from "./LoginPages/SignUp2";
import Login from "./LoginPages/Login";
import { HomePage } from "./HomePage/HomePage";
import { Movies } from "./Movies/Movies";

import { SearchComponent } from "./Search/SearchComponent";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorPage } from "./Search/ErrorPage";
import { useSelector } from "react-redux";
import { Payment } from "./LoginPages/payment";

export const Routers = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/homepage");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Routes>
        /<Route path="/" element={<LandingPage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route exact path="payment" element={<Payment />} />
        <Route
          path="homepage"
          element={
            <PrivateRoutes>
              <HomePage />
            </PrivateRoutes>
          }
        />
        <Route
          path="tvshows"
          element={
            <PrivateRoutes>
              <Movies param="TV Show" />
            </PrivateRoutes>
          }
        />
        <Route
          path="movies"
          element={
            <PrivateRoutes>
              <Movies param="Movie" />
            </PrivateRoutes>
          }
        />
        <Route path="/search/:q" element={<SearchComponent />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
