import React from "react";
import news1 from "../../images/logo.jpg";

import shareImg from "../../images/shareImg.png";
import downloadImg from "../../images/downloadImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";
import bookmarkImg from "../../images/bookmarkImg.png";
import { Link } from "react-router-dom";
function NewsCard({ article }) {

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  return (
    <div className="col-4" >
      <div style={{ marginTop: "2%", padding: "2%" }}>
        <div class="card card-2">
          <img
            class="card-img-top card2-img"
            src={article.image_url || news1}
            alt="Card image cap"
          />
          <div class="card-body">
            <div className="row">
              <div className="col-10">
                <h5 class="card-title card2-title">
                  <Link
                    to="/specific"
                    state={article}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {article.title}
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
                <img src={chatImg} alt="" />
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
}

export default NewsCard;
