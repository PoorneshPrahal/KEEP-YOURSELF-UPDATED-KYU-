import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import bookmarkImg from "../../images/bookmarkImg.png";
import shareImg from "../../images/shareImg.png";
import downloadImg from "../../images/downloadImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";
import logo from "../../images/logo.jpg";
import './Request.css';
import {firestore} from '../../firebase'
import { doc, setDoc } from 'firebase/firestore';
import { toast } from "react-toastify";

const Request = (props) => {
  // // State variables to save articles data
  const [tech, setTech] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  
  // Function to bookmark data
  const bookmark = async(article)=>{

    console.log("Button clicked")

    try {
      const val = doc(firestore,"Bookmarks","8CEou27AnNUuJ9hQfrZO")
      const collectionval = doc(val,userId,article.article_id)
      
      await setDoc(collectionval, article);
      console.log("Success");
      toast.success("Bookmark successful");


     } catch (error) {
      // Display error message
       console.error('Error adding subcomment: ', error);
       console.log("Success");
      toast.error("Error in bookmarking article");
     }
  
     


  }


  const openPopUp = () => {
    setIsOpen(false);
  }; 

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // UseEffect to fetch data from API
  useEffect(() => {
    if (props.query.length === 1) {
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_13656bb97e2c535e8bcc4b82692c762c305c9&category=${props.query[0]}&size=3&language=en`
        )
        .then((res) => {
          setTech(res.data.results);
          console.log(tech);
          props.handleLoad();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_13656bb97e2c535e8bcc4b82692c762c305c9&q=${props.query[0]},${props.query[1]},${props.query[2]}&size=3&language=en`
        )
        .then((res) => {
          setTech(res.data.results);
          console.log(tech);
          props.handleLoad();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        margin: "auto",
      }}
    >
      {/* Map data from state variable to display card elements */}
      {tech.map((news, key) => {
        return (
          <div className="col" style={{ display: "inline-block", padding:'10px'}}>
            <div style={{ marginTop: "3%", padding: "3%" }}>
              <div class="card card-2">
                <img
                  class="card-img-top card2-img foryou-img"
                  src={news.image_url || logo}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <h5 class="card-title card2-title ">
                        <Link
                          to="/specific"
                          state={news}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {news.title}
                        </Link>
                      </h5>
                    </div>
                    <div className="col-2">
                    
                        <img src={bookmarkImg} onClick={()=>{
                          bookmark(news)
                        }} alt="" />
                   
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <img src={shareImg} alt="" />
                    </div>
                    <div className="col-2">
                      <img src={downloadImg} alt="" />
                    </div>
                    <div className="col-2">
                    <Link
                    to="/comments"
                    state={news}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                <img src={chatImg} alt="" onClick={openPopUp}/>

                </Link>
                </div>

                    <div className="col-2">
                      <img src={viewImg} alt="" />
                    </div>
                    <div className="col-4 views">{getRndInteger(100,1000)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
