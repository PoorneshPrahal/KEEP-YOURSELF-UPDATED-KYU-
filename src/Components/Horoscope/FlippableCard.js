import React, { useEffect, useState } from 'react';
import './Horoscope.css';
import news3 from '../../images/news3.png'
import axios from 'axios';

function FlippableCard({ name, color }) {
  const [isFlipped, setFlipped] = useState(false);

  const [horoscopeData, setHoroscopeData] = useState(null);
    

  useEffect(async() => {

    // const f = await fetch('https://newastro.vercel.app/leo/?date=2022-04-20&lang=es')
    // console.log(f)

    
  }, []);
  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="front">
        <img src={news3} alt="Card Front" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="back">
          <h2>{name}</h2>
          <div style={{ backgroundColor: color, width: '50px', height: '50px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default FlippableCard;
