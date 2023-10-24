import React, { useState, useEffect } from "react";
import "./news.css";
import Sidebar from "../Sidebar/Sidebar";


import axios from "axios";
import NewsCard from "./newsCard";
import CardSkeleton from "./CardSkeleton";
import { useLocation, useNavigate  } from "react-router-dom";
import avatar from "../../images/avatar.jpg";
import coins from "../../images/coins.png";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const history = useNavigate();
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const name = localStorage.getItem("userName");
  console.log(name)

  useEffect(() => {
    console.log('Location State:', state);
    fetchInitial();
  }, [state]);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const lazyLoad = async () => {
    if (state.length === 1) {
      
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_31170b992fcdf54dd4092860129f92ca3e1af&category=${state[0]}&language=en&page=${nextPage}`
        )
        .then((res) => {
          const newArticles = res.data.results;

          setArticles((prevArticles) => [...prevArticles, ...newArticles]);
          setNextPage(res.data.nextPage);
          SetIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_31170b992fcdf54dd4092860129f92ca3e1af&q=${state[0]},${state[1]},${state[2]}&language=en&page=${nextPage}`
        )
        .then((res) => {
          console.log(res.data.results);
          setArticles(res.data.results);
          setNextPage(res.data.nextPage);
          console.log(res.data.nextPage);
          SetIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const fetchInitial = async () => {
    console.log("API HAS BEEN HIT")
    if (state.length === 1) {
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_31170b992fcdf54dd4092860129f92ca3e1af&category=${state[0]}&language=en`
        )
        .then((res) => {
          console.log(res.data.results);
          setArticles(res.data.results);
          setNextPage(res.data.nextPage);
          console.log(res.data.nextPage);
          SetIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_31170b992fcdf54dd4092860129f92ca3e1af&q=${state[0]},${state[1]},${state[2]}&language=en`
        )
        .then((res) => {
          console.log(res.data.results);
          setArticles(res.data.results);
          setNextPage(res.data.nextPage);
          console.log(res.data.nextPage);
          SetIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }; 

  window.onscroll = () => {
    // console.log("Scrolled");
    // console.log("Window Height:", window.innerHeight);
    // console.log("Scroll Top:", document.documentElement.scrollTop);
    // console.log("Document Height:", document.documentElement.offsetHeight);
    // console.log(window.innerHeight + document.documentElement.scrollTop);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 2
    ) {
      SetIsLoading(true);

      lazyLoad();
    }
  };

  return (


    <div style={{ display: "flex" }}>
       <Sidebar />
       
      <div >
      <div class="d-flex justify-content-between">
  <div class="p-2 navbarTitle" style={{marginTop : "auto",marginBottom : "auto", marginLeft : "2%"}}>News</div>
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
        <div className="container ">
         

          <div className="row">
            {articles.map((article, index) => {
              return <NewsCard article={article} key={article.id} />;
            })}

            {isLoading && <CardSkeleton cards={6} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
