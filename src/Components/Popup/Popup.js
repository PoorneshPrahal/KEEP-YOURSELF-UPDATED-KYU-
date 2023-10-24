import React, { useState, useEffect } from "react";
import "./Popup.css";
import close from "../../images/closeButton.png";

const interests = [
  "Tech",
  "Sports",
  "Entertainment",
  "Horoscope",
  "JobHunt",
  "International news",
];

const Popup = () => {

  // UseState to save interest of users 
  const [selectedInterests, setSelectedInterests] = useState([]);
  // UseState to handle opening and closing of popup
  const [isOpen, setIsOpen] = useState(false);

  // Function to toogle selected options on click
  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      if (selectedInterests.length < 3) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };

  // Function to close popup
  const closePopup = () => {
    setIsOpen(false);
  };

  // UseEffect to handle opening and closing of popup
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`popup-container ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-button" onClick={closePopup}>
          <img src={close} height={20} alt="Close" />
        </button>
        <h3 style={{ color: "rgba(0,0,0,0.7)", marginTop: "20px" }}>
          Choose Your Top 3 Interests
        </h3>
        <div className="interests-container">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`interest-box ${
                selectedInterests.includes(interest) ? "selected" : ""
              }`}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
