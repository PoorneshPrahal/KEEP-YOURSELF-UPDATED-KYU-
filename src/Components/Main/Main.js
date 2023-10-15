import React from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar.js";
import { useState, useEffect } from "react";
const Main = () => {
  const [tech, setTech] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_13638e5d227e5c4d3b68974d6e3b7841a6174&q=technology&size=3"
      )
      .then((res) => {
        setTech(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Sidebar />
      <div style={{ display: "inline-block" }}></div>
    </div>
  );
};

export default Main;
