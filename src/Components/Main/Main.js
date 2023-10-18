import React from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar.js";
import { useState, useEffect } from "react";
import Comments from "../Comments/Comments.js";
const Main = () => {

  const [tech, setTech] = useState([]);
  const [show,setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  const handleClick2 = () => {
    setShow(!show)
  }
  
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
      <button onClick={handleClick}>Comments</button>
      {/* <Comments show={show} handleClass={handleClick}/> */}
      {show && <Comments handleClick={handleClick}/>}

      <button onClick={handleClick2}>Summarize</button>
      
      <div style={{ display: "inline-block" }}></div>
    </div>
  );
};

export default Main;
