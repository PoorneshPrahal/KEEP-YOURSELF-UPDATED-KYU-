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
  // State variables to save articles data using useLocation hook
  const [articles, setArticles] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const history = useNavigate();
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const name = localStorage.getItem("userName");
  console.log(name)

  // UseEffect to fetch articles data from API 
  useEffect(() => {
    console.log('Location State:', state);
    fetchInitial();
  }, [state]);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // LazyLoading function to load the data once the user scrolls down
  const lazyLoad = async () => {
    if (state.length === 1) {
      
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_13656bb97e2c535e8bcc4b82692c762c305c9&category=${state[0]}&language=en&page=${nextPage}`
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
          `https://newsdata.io/api/1/news?apikey=pub_13656bb97e2c535e8bcc4b82692c762c305c9&q=${state[0]},${state[1]},${state[2]}&language=en&page=${nextPage}`
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

  // Function to Load the data intially from API
  const fetchInitial = async () => {
    console.log("API HAS BEEN HIT")
    if (state.length === 1) {
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_13656bb97e2c535e8bcc4b82692c762c305c9&category=${state[0]}&language=en`
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
          `https://newsdata.io/api/1/news?apikey=pub_13656bb97e2c535e8bcc4b82692c762c305c9&q=${state[0]},${state[1]},${state[2]}&language=en`
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

  // Logic for LazyLoading function call
  window.onscroll = () => {
    
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
         
          {/* Display articles using map function */}
          <div className="row">
            {articles.map((article, index) => {
              return <NewsCard article={article} key={article.id} />;
            })}
            {/* Card skeleton to be displayed when content is loading */}
            {isLoading && <CardSkeleton cards={6} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
