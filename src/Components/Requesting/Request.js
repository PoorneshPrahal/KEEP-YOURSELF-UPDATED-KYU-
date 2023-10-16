import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import news1 from "../../images/news1.png";
import bookmarkImg from "../../images/bookmarkImg.png";
import shareImg from "../../images/shareImg.png";
import downloadImg from "../../images/downloadImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";

const Request = (props) => {
  const [tech, setTech] = useState([
    { title: "Hi, I am Poornesh.... I am doing this to learn react" },
    { title: "Hi, I am Poornesh.... I am doing this to learn react" },
    { title: "Hi, I am Poornesh.... I am doing this to learn react" },
  ]);
  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=pub_31170b992fcdf54dd4092860129f92ca3e1af&category=${props.query}&size=3&language=en`
      )
      .then((res) => {
        setTech(res.data.results);
        console.log(tech);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "1%",
      }}
    >
      {tech.map((news, key) => {
        return (
          <div
            className="newscards"
            style={{ display: "inline-block", margin: "1.2%" }}
          >
            <div class="card card-2">
              <img
                class="card-img-top card2-img"
                src={news1}
                alt="Card image cap"
              />
              <div class="card-body">
                <div className="row">
                  <div className="col-10">
                    <h5 class="card-title card2-title">{news.title}</h5>
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
                    <img src={chatImg} alt="" />
                  </div>

                  <div className="col-2">
                    <img src={viewImg} alt="" />
                  </div>
                  <div className="col-4 views">799 views</div>
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
