import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo.jpg";

const SpecificNews = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Sidebar />
      <div
        style={{
          display: "inline-block",
          width: "100%",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{state.title}</h1>
        <h4 style={{ textAlign: "center" }}>{state.description}</h4>
        <img
          src={state.image_url || logo}
          style={{ width: "80%", marginLeft: "10%", marginRight: "10%" }}
        />
        <p>{state.content}</p>
      </div>
      <div
        style={{
          display: "inline-block",
          width: "20%",
          margin: "1%",
          border: "solid 2px black",
          padding: "1%",
          borderRadius: "5%",
        }}
      >
        <span>Pen down your thoughts...</span>
        <input
          type="text"
          placeholder="Type Something..."
          style={{ borderRadius: "10%" }}
        />
      </div>
    </div>
  );
};

export default SpecificNews;
