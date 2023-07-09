import React from "react";
import Navbar from "../components/Navbar";
import { Search } from "./Search";

export const SearchComponent = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: window.innerHeight }}>
      <Navbar />
      <Search />
    </div>
  );
};
