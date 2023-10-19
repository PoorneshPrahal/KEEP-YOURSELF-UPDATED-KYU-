import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Sidebar from "../Sidebar/Sidebar.js";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo.jpg";
import summarizer from "../../images/summarizer.jpg";
import share from "../../images/share.jpg";
import readaloud from "../../images/readaloud.png";
import Send from "../../images/Send.jpg";
import { useSpeechSynthesis } from 'react-speech-kit';
import profilePic from "../../images/profilepic.svg";
import coins from "../../images/coins.png";

const SpecificNews = (props) => {
  const location = useLocation();
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

  const summarize = ()=>{
    cancel();
  }


  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Sidebar />
      <div
        style={{
          display: "inline-block",
          width: "100%",
        }}
      >
        <div class="d-flex justify-content-between">
  <div class="p-2 navbarTitle" style={{marginTop : "auto",marginBottom : "auto", marginLeft : "2%"}}>Technology News</div>
  <div class="d-flex">
    <div class="p-2 d-flex" style={{marginTop : "auto",marginBottom : "auto"}}>
    <img src={coins} alt="" />
      <p style={{marginTop : "auto",marginBottom : "auto"}} >{getRndInteger(100,1000)}</p>
    </div>
    <div class="p-2 d-flex"  >
      <img src={profilePic} alt="" />
      <p style={{marginTop : "auto",marginBottom : "auto"}} >Katrina Petrova</p>
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
                border: "solid 2px black",
                width: "15%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
              onClick={summarize}
            >
              <img src={summarizer} style={{ width: "23%" }} alt="" srcset="" />
              <span> Summarize</span>
            </Button>
            <Button
              variant="light"
              style={{
                border: "solid 2px black",
                width: "15%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
              onClick={readAloudFunction}
            >
              <img src={toggle ? readaloud : share} style={{ width: "23%" }} alt="" srcset="" />
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
          <p style={{ fontSize: "1.5em" }}>{state.description}</p>
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
          <p style={{ fontSize: "1.3em" }}>{state.content}</p>
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
    </div>
  );
};

export default SpecificNews;
