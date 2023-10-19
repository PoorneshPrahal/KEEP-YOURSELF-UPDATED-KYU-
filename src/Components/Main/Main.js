import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar.js";

import Genre from "../Requesting/Genre.jsx";
import CardSkeleton from "../News/CardSkeleton.jsx";
const Main = () => {
  const [isloading1, setIsLoading1] = useState(true);
  const [isloading2, setIsLoading2] = useState(true);
  const [isloading3, setIsLoading3] = useState(true);
  const [isloading4, setIsLoading4] = useState(true);
  const arr = ["Technology", "Politics", "Sports"];

  const handleLoading1 = () => {
    setIsLoading1(false);
  };
  const handleLoading2 = () => {
    setIsLoading2(false);
  };
  const handleLoading3 = () => {
    setIsLoading3(false);
  };
  const handleLoading4 = () => {
    setIsLoading4(false);
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="fullpage"
        style={{
          width: "100%",
        }}
      >
        <div className="row">{isloading1 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading2 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading3 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading4 && <CardSkeleton cards={3} />}</div>
        <Genre query={arr} handleLoading={handleLoading1} />
        <Genre query={["Technology"]} handleLoading={handleLoading2} />
        <Genre query={["Horoscope"]} handleLoading={handleLoading3} />
        <Genre query={["Sports"]} handleLoading={handleLoading4} />
      </div>
    </div>
  );
};

export default Main;
