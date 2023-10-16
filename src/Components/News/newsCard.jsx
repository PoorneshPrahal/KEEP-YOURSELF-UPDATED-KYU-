import React from "react";
import news1 from "../../images/logo.jpg";

import shareImg from "../../images/shareImg.png";
import downloadImg from "../../images/downloadImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";
import bookmarkImg from "../../images/bookmarkImg.png";
import { Link } from "react-router-dom";
function NewsCard({ article }) {
  return (
    <div className="col">
      <div style={{ marginTop: "3%", padding: "4%" }}>
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
                  <Link to="/specific" state={article}>
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
              <div className="col-4 views">799 views</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
