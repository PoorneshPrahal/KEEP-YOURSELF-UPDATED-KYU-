import React, { useState, useEffect } from 'react';
import './Popup.css'; 
import close from '../../images/closeButton.png';

const interests = ["Tech", "Sports", "Entertainment", "Horoscope", "JobHunt", "International news"]; 

const Popup = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      if (selectedInterests.length < 3) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`popup-container ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <button className="close-button" onClick={closePopup}>
          <img src={close} height={20} alt="Close" />
        </button>
        <h3 style={{ color: "rgba(0,0,0,0.7)", marginTop: '20px' }}>Choose Your Top 3 Interests</h3>
        <div className="interests-container">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`interest-box ${selectedInterests.includes(interest) ? 'selected' : ''}`}
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
