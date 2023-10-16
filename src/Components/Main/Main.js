import React from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar.js";
import Request from "../Requesting/Request.js";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="fullpage" style={{ width: "100%" }}>
        <div
          style={{
            display: "inline-block",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "3%",
              marginRight: "3%",
            }}
          >
            <span style={{ fontSize: "1.7em", fontWeight: "600" }}>
              Technology
            </span>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span style={{ fontSize: "1.4em" }}>See all</span>
            </Link>
          </div>

          <Request query="Technology" />
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "3%",
              marginRight: "3%",
            }}
          >
            <span style={{ fontSize: "1.7em", fontWeight: "600" }}>
              Technology
            </span>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span style={{ fontSize: "1.4em" }}>See all</span>
            </Link>
          </div>

          <Request query="Technology" />
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "3%",
              marginRight: "3%",
            }}
          >
            <span style={{ fontSize: "1.7em", fontWeight: "600" }}>
              Technology
            </span>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span style={{ fontSize: "1.4em" }}>See all</span>
            </Link>
          </div>

          <Request query="Technology" />
        </div>
      </div>
    </div>
  );
};

export default Main;
