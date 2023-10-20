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


const Request = (props) => {
  const [tech, setTech] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const bookmarkfunc = () => {
    alert("You have clicked/....");
  };

  const openPopUp = () => {
    setIsOpen(false);
  }; 

  useEffect(() => {
    if (props.query.length === 1) {
      axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_13638e5d227e5c4d3b68974d6e3b7841a6174&q=${props.query[0]}&size=3&language=en`
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
          `https://newsdata.io/api/1/news?apikey=pub_13638e5d227e5c4d3b68974d6e3b7841a6174&q=${props.query[0]},${props.query[1]},${props.query[2]}&size=3&language=en`
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
                    
                        <img src={bookmarkImg} alt="" />
                   
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
                    <Link to='/comments'>
                <img src={chatImg} alt="" onClick={openPopUp}/>

                </Link>
                </div>

                    <div className="col-2">
                      <img src={viewImg} alt="" />
                    </div>
                    <div className="col-4 views">799 views</div>
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
