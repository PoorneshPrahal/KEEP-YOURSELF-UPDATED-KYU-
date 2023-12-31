import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Sidebar from "../Sidebar/Sidebar.js";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo.jpg";
import summarizer from "../../images/summarizer.jpg";
import mute from "../../images/muteImg1.png";
import readaloud from "../../images/readaloud.png";
import Send from "../../images/Send.jpg";
import { useSpeechSynthesis } from 'react-speech-kit';
import avatar from "../../images/avatar.jpg";
import coins from "../../images/coins.png";
import ChatBot from "../ChatBot/ChatBot.js";
import { Link } from "react-router-dom";
const SpecificNews = (props) => {
  // Use location hook to obtain article data
  const location = useLocation();
  const name = localStorage.getItem("userName");
  const { speak, cancel } = useSpeechSynthesis();
  const [toggle, setToggle] = useState(true)
  const state = location.state;
  const countries = state.country;
  const categories = state.category;
  console.log(categories);
  console.log(state);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // Function to read aloud the news article on click
  const readAloudFunction = ()=>{
    
    if(toggle){
    speak({ text: state.content })
    setToggle(false)
    }
    else{
      cancel()
      setToggle(true)

    }

  }

  function stringTitleCase(_string) {
    let capitalizeLetterFunc = (match) => match.toUpperCase();
    return _string.replace(/(^\w{1})|(\s{1}\w{1})/g, capitalizeLetterFunc);
  }

 
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Sidebar Component */}
      <Sidebar />
      <div
        style={{
          display: "inline-block",
          width: "100%",
        }}
      >
        <div class="d-flex justify-content-between">
  <div class="p-2 navbarTitle" style={{marginTop : "auto",marginBottom : "auto", marginLeft : "2%"}}>News</div>
  <div class="d-flex">
    <div class="p-2 d-flex" style={{marginTop : "auto",marginBottom : "auto"}}>
    <img src={coins} alt="" />
      <p style={{marginTop : "auto",marginBottom : "auto"}} >{getRndInteger(100,1000)}</p>
    </div>
    <div class="p-2 d-flex"  >
      <img src={avatar} alt="" height={40} width={40} style={{borderRadius : "100px"}}/>
      <p style={{marginTop : "auto",marginBottom : "auto"}} >{name}</p>
    </div>
  </div>
</div>
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="light"
              style={{
                border: "solid 1px grey",
                width: "17%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
             
            ><Link
            to="/comments"
            state={state}
            style={{ textDecoration: "none", color: "black" }}
          >

              <img src={summarizer} style={{ width: "23%" }} alt="" srcset="" />
              <span> Comment</span>
              </Link>
            </Button>
            <Button
              variant="light"
              style={{
                border: "solid 1px grey",
                width: "17%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
              onClick={readAloudFunction}
            >
              <img src={toggle ? readaloud : mute} style={{ width: "23%" }} alt="" srcset="" />
              <span> Read-Aloud</span>
            </Button>
          </div>

          <h5>
            {countries.map((country) => {
              return (
                <span style={{ color: "red" }}>
                  {stringTitleCase(country)} |
                </span>
              );
            })}
            {categories.map((category, key) => {
              return (
                <span>
                  {" " + stringTitleCase(category)}
                  {key < categories.length - 1 && "|"}
                </span>
              );
            })}
          </h5>
          <h1 style={{ marginBottom: "2%", marginTop: "1%" }}>{state.title}</h1>
          <p style={{ fontSize: "1.5em",textAlign : "justify" }}>{state.description}</p>
          <img
            src={state.image_url || logo}
            style={{
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              marginTop: "3%",
              marginBottom: "3%",
            }}
          />
          <p style={{ fontSize: "1.3em",textAlign : "justify" }} className="specific-para">{state.content}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "25%",
          height: "70vh",
          margin: "1%",
          border: "solid 2px black",
          padding: "1%",
          borderRadius: "5%",
        }}
      >
        {/* Component to write down your thoughts about news articles */}
        <span>Pen down your thoughts...</span>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Type Something..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <img src={Send} alt="" srcset="" />
          </Button>
        </InputGroup>
      </div>
      <ChatBot/>
    </div>
  );
};

export default SpecificNews;
