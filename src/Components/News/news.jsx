import React from 'react'
import "./news.css";
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import news1 from "../../images/news1.png";
import news2 from "../../images/news2.png";
import news3 from "../../images/news3.png";
import shareImg from "../../images/shareImg.png";
import downloadImg from "../../images/downloadImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";
import bookmarkImg from "../../images/bookmarkImg.png";


function News() {
  return (
    <div>
      
      <Sidebar/>
      <div className="container div3" style={{display : "inline-block",width:"50%"}}>
        <p className="heading">Featured News</p>
        <div className="row">
          <div className="col">
            <div style={{ marginTop: "3%" }}>
              <div class="card card-2">
                <img
                  class="card-img-top card2-img"
                  src={news1}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <h5 class="card-title card2-title">
                        Travelers pay more than 2k, Trudeau says
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

          <div className="col">
            <div style={{ marginTop: "3%" }}>
              <div class="card card-2">
                <img
                  class="card-img-top card2-img"
                  src={news2}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <h5 class="card-title card2-title">
                        RBI extends last date of depositing Rs 2,000 notes to
                        October 7
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

          <div className="col">
            <div style={{ marginTop: "3%" }}>
              <div class="card card-2">
                <img
                  class="card-img-top card2-img"
                  src={news3}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <h5 class="card-title card2-title">
                        Political news on president Joe Biden
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
        </div>
      </div>

    </div>
  )
}

export default News