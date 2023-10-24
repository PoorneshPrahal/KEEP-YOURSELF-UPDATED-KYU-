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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      >
        <span style={{ fontSize: "1.5em", fontWeight: "600" }}>
          {props.query.length === 1 ? props.query : "For You"}
        </span>
        <Link
          to="/news"
          state={props.query}
          style={{ textDecoration: "none", color: "black" }}
        >
          <span style={{ fontSize: "1em", color:'blue'}}>See all</span>
        </Link>
      </div>
      
      {/* Component to display a row of articles */}
      <Request query={props.query} handleLoad={props.handleLoading} />
    </div>
  );
};

export default Genre;
