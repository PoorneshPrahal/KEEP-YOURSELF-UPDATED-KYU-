import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import shareImg from "../../images/shareImg.png";
import downloadImg from "../../images/downloadImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";
import bookmarkImg from "../../images/bookmarkImg.png";
function CardSkeleton({ cards }) {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  // Card skeleton component to display when content is loading
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div className="col-4" key={i}>
        <div style={{ marginTop: "3%", padding: "3%" }}>
          <div class="card card-2">
            <Skeleton
              style={{ marginLeft: "3%", marginTop: "3%" }}
              width={350}
              height={160}
            />
            <div class="card-body">
              <div className="row">
                <div className="col-10">
                  <h5 class="card-title card2-title">
                    <Skeleton count={2} />
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
    ));
}

export default CardSkeleton;
