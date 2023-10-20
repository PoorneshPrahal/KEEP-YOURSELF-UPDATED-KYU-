import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import news1 from "../../images/news1.png";
import bookmarkImg from "../../images/bookmarkImg.png";
import shareImg from "../../images/shareImg.png";
import downloadImg from "../../images/downloadImg.png";
import chatImg from "../../images/chatImg.png";
import viewImg from "../../images/viewsImg.png";

const PositiveNews = () => {
  const [positiveNews, setPositiveNews] = useState([]);

  useEffect(() => {
    const fetchPositiveNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/positivenews"); // Fetch positive news from the server
        if (response.ok) {
          const data = await response.json();
          setPositiveNews(data);
          console.log(positiveNews);
        } else {
          console.error("Error fetching positive news:", response.status);
        }
      } catch (error) {
        console.error("Error fetching positive news:", error);
      }
    };

    fetchPositiveNews(); // Fetch positive news when the component mounts
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    // <div>
    //   <div>
    //     <h2>Positive News</h2>
    //     <ul>
    //       {positiveNews.map((article, index) => (
    //         <li key={index}>
    //           <strong>{article.title}</strong> - {article.description}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="row" style={{ margin: "auto" }}>
        {positiveNews.map((news) => {
          return (
            <div className="col">
              <div style={{ marginTop: "3%", padding: "4%" }}>
                <div class="card card-2">
                  <img
                    class="card-img-top card2-img"
                    src={news.urlToImage}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PositiveNews;
