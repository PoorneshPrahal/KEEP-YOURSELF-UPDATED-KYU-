import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar.js";
import "./Main.css";
import Genre from "../Requesting/Genre.jsx";
import CardSkeleton from "../News/CardSkeleton.jsx";
import Comments from "../Comments/Comments.js";
import ChatBot from "../ChatBot/ChatBot.js";
import profilePic from "../../images/profilepic.svg";
import coins from "../../images/coins.png";
import avatar from "../../images/avatar.jpg";
import BreakingNews from "../../images/breakingNews.gif";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const Main = () => {

  // State variables to handle cardSkeleton while data is loading
  const [isloading1, setIsLoading1] = useState(true);
  const [isloading2, setIsLoading2] = useState(true);
  const [isloading3, setIsLoading3] = useState(true);
  const [isloading4, setIsLoading4] = useState(true);
  const [isloading5, setIsLoading5] = useState(false);
  const [isloading6, setIsLoading6] = useState(true);
  
  // // State variables to save Breaking news data
  const [breakNews, setBreakNews] = useState([]);
  const [article,setArticle] = useState({});
  
  const arr = ["Technology", "Politics", "Sports"];
  const [count,setCount] = useState(0);
  const name = localStorage.getItem("userName");
  

  // UseEffect to fetch Breaking News data
  useEffect(()=>{

    axios
    .get(
      `https://newsdata.io/api/1/news?apikey=pub_13656bb97e2c535e8bcc4b82692c762c305c9&size=3&language=en`
    )
    .then((res) => {
      const newArticles = res.data.results;
      console.log(newArticles)

      // Save articles in BreakNews state variable
      setBreakNews(newArticles)
     
      setIsLoading5(true)
      setIsLoading6(false)
    })
    .catch((err) => {
      // Display error in console
      console.log(err);
    });


  },[]);

  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // Functions to handle loading of data
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

<div class="d-flex justify-content-between">
  <div class="p-2 navbarTitle" style={{marginTop : "auto",marginBottom : "auto", marginLeft : "2%"}}>Hola Amigo!</div>
  <div class="d-flex">
    <div class="p-2 d-flex" style={{marginTop : "auto",marginBottom : "auto"}}>
    <img src={coins} alt="" />
      <p style={{marginTop : "auto",marginBottom : "auto"}} >{getRndInteger(100,1000)}</p>
    </div>
    <div class="p-2 d-flex"  >
      <img src={avatar} alt="" height={40} width={40} style={{borderRadius : "100px"}} />
      <p style={{marginTop : "auto",marginBottom : "auto"}} >{name}</p>
    </div>
  </div>
</div>

<div className="container">

<div className="BreakingNews">

        <img src={BreakingNews} className="breakNewsGif" alt="" />
        <Link
                    to="/specific"
                    state={breakNews[0]}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                      <p className="BreakNewsPara">{isloading5 && breakNews[0].title}</p>
                  </Link>   

        {/* Loading skeleton to be displayed while Breaking News content is loading */}
        {isloading6 && <Skeleton count={2} />}

</div>


</div>



        {/* Displaying skeleton while data is loading */}
        <div className="row">{isloading1 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading2 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading3 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading4 && <CardSkeleton cards={3} />}</div>

        {/* Displaying the articles obtained from API */}
        <Genre query={arr} handleLoading={handleLoading1} />
        <Genre query={["Technology"]} handleLoading={handleLoading2} />
        <Genre query={["Science"]} handleLoading={handleLoading3} />
        <Genre query={["Sports"]} handleLoading={handleLoading4} />
      </div>
      <ChatBot/>
    </div>
  );
};

export default Main;
