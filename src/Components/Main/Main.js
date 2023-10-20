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
import BreakingNews from "../../images/breakingNews.gif";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const Main = () => {
  const [isloading1, setIsLoading1] = useState(true);
  const [isloading2, setIsLoading2] = useState(true);
  const [isloading3, setIsLoading3] = useState(true);
  const [isloading4, setIsLoading4] = useState(true);
  const [isloading5, setIsLoading5] = useState(false);
  const [isloading6, setIsLoading6] = useState(true);
  
  const [breakNews, setBreakNews] = useState([]);
  const [article,setArticle] = useState({});
  
  const arr = ["Technology", "Politics", "Sports"];
  const [count,setCount] = useState(0);
  useEffect(()=>{

    axios
    .get(
      `https://newsdata.io/api/1/news?apikey=pub_13638e5d227e5c4d3b68974d6e3b7841a6174&size=3&language=en`
    )
    .then((res) => {
      const newArticles = res.data.results;
      console.log(newArticles)
      setBreakNews(newArticles)
      // setArticle(newArticles[0].title)
      setIsLoading5(true)
      setIsLoading6(false)
    })
    .catch((err) => {
      console.log(err);
    });


  },[]);
  // if(breakNews){
  //   setInterval(async () => {
  //     let i = count;
  //     if (i < breakNews.length) {
  //       const currentArticle =await  breakNews[i].title;
  //       // Implement typewriter and fade-in logic here, similar to the previous examples
  //       // You can use the typewriter and fade-in logic from the previous examples
  //       // Update the displayed article title using useState and useEffect
  //       // ...
  //      await console.log(currentArticle, i);
  //       await setCount(i + 1);
  //     } else {
  //       // Reset the count to 0 if it exceeds the length of breakNews array
  //       setCount(0);
  //     }
  //   }, 10000);

  // }
  
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
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
      <img src={profilePic} alt="" />
      <p style={{marginTop : "auto",marginBottom : "auto"}} >Katrina Petrova</p>
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
        {isloading6 && <Skeleton count={2} />}

</div>


</div>




        <div className="row">{isloading1 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading2 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading3 && <CardSkeleton cards={3} />}</div>
        <div className="row">{isloading4 && <CardSkeleton cards={3} />}</div>
        <Genre query={arr} handleLoading={handleLoading1} />
        <Genre query={["Technology"]} handleLoading={handleLoading2} />
        <Genre query={["Horoscope"]} handleLoading={handleLoading3} />
        <Genre query={["Sports"]} handleLoading={handleLoading4} />
      </div>
      <ChatBot/>
    </div>
  );
};

export default Main;
