import React from "react";
import { Link } from "react-router-dom";
import Request from "./Request.js";

const Genre = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "100%",
      }}
    >
      {/* Here the Main page navbar should come */}
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
          {props.query.length === 1 ? props.query : "For You"}
        </span>
        <Link
          to="/news"
          state={props.query}
          style={{ textDecoration: "none", color: "black" }}
        >
          <span style={{ fontSize: "1.4em" }}>See all</span>
        </Link>
      </div>

      <Request query={props.query} handleLoad={props.handleLoading} />
    </div>
  );
};

export default Genre;
