import React from "react";
import "./home.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import overwhelmed from "../../images/overwhelmed.png";
import circleGrp from "../../images/Group 74.png";
import circleGrp1 from "../../images/Group 75.png";
import circleGrp2 from "../../images/Ellipse 17.png";
import circleGrp3 from "../../images/Group 76.png";
import oneStopSolutionImg from "../../images/one-stopSolution.png";
import advertise from "../../images/advertise.png";
import reward from "../../images/reward.png";
import news1 from "../../images/news1.png";
import news2 from "../../images/news2.png";
import news3 from "../../images/news3.png";
import shareImg from "../../images/shareImg.png";
import downloadImg from "../../images/downloadImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";
import bookmarkImg from "../../images/bookmarkImg.png";
import chooseUsImg from "../../images/chooseUsImg.png";
import KYUImg from "../../images/KYUImg.png";
import Navbar from "../Navbar/Navbar";
import Popup from "../Popup/Popup";
import ChatBot from "../ChatBot/ChatBot";
import { auth, app, firestore, collection, getDocs } from "../../firebase.js";

export default function Home(props) {
  const [flag, setflag] = useState(0);
  const location = useLocation();
  const state = location.state;
  console.log(state);
  useEffect(() => {
    const colRef = collection(firestore, "UsersDatas");
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.data().id);
          if (doc.data().id == state) {
            if (doc.data().favs.length === 0) {
              setflag(1);
            }
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <img src={circleGrp3} className="grp3" alt="" />
      <div className="container div1">
        <div className="row">
          <div className="col-7">
            <img className="overwhelmed" src={overwhelmed} alt="" />
            <p
              className="welcometxt"
              style={{ marginTop: "35px", marginLeft: "20px" }}
            >
              Stay cool, Seek Serenity <br /> and Keep Yourself Updated <br />{" "}
              with KYU.
            </p>

            <button
              className="btngrad"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Get Started
            </button>
            <img src={circleGrp2} className="grp2" alt="" />
            <img src={circleGrp1} className="grp1" alt="" />
          </div>

          <div className="col-5">
            <img src={circleGrp} className="grp" alt="" />
          </div>
        </div>
      </div>

      <div className="container div2">
        <p className="heading">Navigate News with Ease</p>

        <div className="row" style={{ marginTop: "5%" }}>
          <div className="col">
            <div class="card card-1">
              <img
                class="card-img-top card1-img"
                src={oneStopSolutionImg}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title card1-title">One-Stop Solution</h5>
                <p class="card-text card1-para">
                  Say goodbye to information overload! With KYU, you get news
                  that's curated exclusively for your interests. Choose your
                  favorite topics, and let our smart algorithms do the rest.
                  It's like having your very own news concierge.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card card-1">
              <img
                class="card-img-top card1-img"
                src={advertise}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title card1-title">Advertise your Buisness</h5>
                <p class="card-text card1-para">
                  {" "}
                  Elevate your business with our powerful advertising platform.
                  Reach new customers, tell your story, and watch your brand
                  soar. Start promoting your business today!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card card-1">
              <img
                class="card-img-top card1-img"
                src={reward}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title card1-title">Get Rewards Daily</h5>
                <p class="card-text card1-para">
                  Get ready to transform your news consumption into a rewarding
                  experience with KYU. We believe that staying informed should
                  not only empower you but also reward you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container div3">
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

      <div className="container div4">
        <p className="heading">Why choose us?</p>

        <div className="chooseUs">
          <ul class="list-group">
            <li class="list-group-item">
              <img src={chooseUsImg} alt="Tick image" />
              <div className="chooseUsRight">
                <h2 className="chooseUsHeading">Personalized News Feed</h2>
                <p className="chooseUsPara">
                  Utilizes advanced technology to provide personalized mental
                  health solutions, focusing on individual needs, preferences,
                  and goals, ensuring desired outcomes.
                </p>
              </div>
            </li>
            <li class="list-group-item">
              <img src={chooseUsImg} alt="Tick image" />
              <div className="chooseUsRight">
                <h2 className="chooseUsHeading">Affordable Prices</h2>
                <p className="chooseUsPara">
                  prioritizes user experience, ensuring an intuitive, engaging,
                  and easy-to-navigate platform with a user-friendly interface
                  for a seamless and enjoyable experience.
                </p>
              </div>
            </li>
            <li class="list-group-item">
              <img src={chooseUsImg} alt="Tick image" />
              <div className="chooseUsRight">
                <h2 className="chooseUsHeading">Keep Yourself Updated</h2>
                <p className="chooseUsPara">
                  Our website has demonstrated a significant positive impact on
                  the mental well-being of our users, as evidenced by
                  testimonials and case studies
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src={KYUImg} alt="" />
            </div>

            <div className="col-2">
              <ul style={{ listStyle: "none", marginTop: "70px" }}>
                <li className="footer-text">WEEBLY THEMES</li>
                <li className="footer-text">PRE-Sale FAQS</li>
                <li className="footer-text">SUBMIT A TICKET</li>
              </ul>
            </div>

            <div className="col-2">
              <ul style={{ listStyle: "none", marginTop: "70px" }}>
                <li className="footer-text">SERVICES</li>
                <li className="footer-text">THEME TWEAK</li>
              </ul>
            </div>

            <div className="col-2">
              <ul style={{ listStyle: "none", marginTop: "70px" }}>
                <li className="footer-text">SHOWCASE</li>
                <li className="footer-text">WIDGETKIT</li>
                <li className="footer-text">SUPPORT</li>
              </ul>
            </div>

            <div className="col-2">
              <ul style={{ listStyle: "none", marginTop: "70px" }}>
                <li className="footer-text">ABOUT US</li>
                <li className="footer-text">CONTACT US</li>
                <li className="footer-text">AFFILIATES</li>
                <li className="footer-text">RESOURCES</li>
              </ul>
            </div>
          </div>

          <div class="line"></div>
        </div>
      </div>
      {flag && <Popup />}<ChatBot/>

    </div>
  );
}
