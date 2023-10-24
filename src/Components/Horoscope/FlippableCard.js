import React, { useState } from 'react';
import './Horoscope.css'; 
import Sidebar from '../Sidebar/Sidebar.js';
import profilePic from "../../images/profilepic.svg";
import coins from "../../images/coins.png";
import aries from '../../images/aries.jpg';
import taurus from '../../images/taurus.jpg';
import gemini from '../../images/gemini.jpg';
import cancer from '../../images/cancer.jpg';
import leo from '../../images/leo.jpg'
import virgo from '../../images/virgo.jpg'
import libra from '../../images/libra.jpg'
import scorpio from '../../images/scorpio.jpg'
import sagittarius from '../../images/sagittarius.jpg'
import capricorn from '../../images/capricorn.jpg'
import aqaurius from '../../images/aquarius.jpg'
import pisces from '../../images/pisces.jpg'

const zodiacSigns = [
  {
    title:"Today's Horoscope ",
    details: "Aries, it's a day for action! Your energy and enthusiasm are contagious, making it an excellent time to start something new. Trust your instincts, be confident, and seize opportunities. In love, express your passion. Stay mindful of impulsive decisions.",
    luckyNumber:"Lucky numbers: 3, 9, 21",
    luckyColor:"Lucky color: Red.",
    image: aries,
  },
  {
    title:"Today's Horoscope ",
    details: "Taurus, it's a day for action! Your energy and enthusiasm are contagious, making it an excellent time to start something new. Trust your instincts, be confident, and seize opportunities. In love, express your passion. Stay mindful of impulsive decisions.",
    luckyNumber:"Lucky numbers: 2, 6, 18",
    luckyColor:"Lucky color: Green",
    image: taurus,
    
  },
  {
    image: gemini,
    title:"Today's Horoscope ",
    details: "Gemini, your curiosity and adaptability shine today. It's a great time for intellectual pursuits, learning, and exploring new ideas. Your communication skills are at their best, making it an ideal day for conversations and networking.",
    luckyNumber:"Lucky numbers:  5, 11, 23",
    luckyColor:"Lucky color: Yellow",
  },
  {
    image: cancer,
    title:"Today's Horoscope ",
    details: "Cancer, your intuition is your guide today. Trust your gut feelings and go with the flow. It's an excellent time to focus on home and family matters. Nurture your relationships and create a cozy atmosphere. In love, your caring nature shines. ",
    luckyNumber:"Lucky numbers:4, 13, 27",
    luckyColor:"Lucky color: Silver",
  },
  {
    image: leo,
    title:"Today's Horoscope ",
    details: "Leo, it's your time to shine! Your confidence and charisma are in the spotlight. Use your energy to pursue your goals and make a positive impression. In love, express your affection and warmth.",
    luckyNumber:"Lucky numbers: 1, 10, 22",
    luckyColor:"Lucky color: Gold",
  },
  {
    image: virgo,
    title:"Today's Horoscope ",
    details: "Virgo, it's a day for precision and organization. Your attention to detail serves you well in work and daily tasks. Focus on improving your routines and making them more efficient. In love, show your practical affection.",
    luckyNumber:"Lucky numbers: 6, 14, 30",
    luckyColor:"Lucky color: Green",
  },
  {
    image: libra,
    title:"Today's Horoscope ",
    details: "Libra, it's a day for balance and harmony. Focus on resolving conflicts and finding common ground in relationships. Your diplomatic skills shine. In love, express your romantic side. ",
    luckyNumber:"Lucky numbers:  2, 7, 18",
    luckyColor:"Lucky color: Blue",
  },
  {
    image: scorpio,
    title:"Today's Horoscope ",
    details: "Scorpio, it's a day for transformation and introspection. Dive deep into your thoughts and emotions. It's a great time for self-discovery and personal growth. In love, be passionate and share your feelings.",
    luckyNumber:"Lucky numbers: 4, 9, 21",
    luckyColor:"Lucky color: Maroon",
  },
  {
    image: sagittarius,
    title:"Today's Horoscope ",
    details: "Sagittarius, it's a day for adventure and exploration. Embrace your natural curiosity and seek new experiences. It's an excellent time for travel or learning something new. In love, share your optimism.",
    luckyNumber:"Lucky numbers: 3, 8, 19",
    luckyColor:"Lucky color: Purple",

  },
  {
    image: capricorn,
    title:"Today's Horoscope ",
    details: "Capricorn, it's a day for ambition and determination. Focus on your goals and stay disciplined in your pursuits. Your hard work pays off. In love, express your steadfast devotion. ",
    luckyNumber:"Lucky numbers: 5, 12, 25",
    luckyColor:"Lucky color: Brown",
  },
  {
    image: aqaurius ,
    title:"Today's Horoscope ",
    details: "Aquarius, it's a day for innovation and independence. Embrace your individuality and think outside the box. It's an excellent time for creative projects and unique ideas. In love, express your uniqueness.",
    luckyNumber:"Lucky numbers: 7, 15, 28",
    luckyColor:"Lucky color: Turquoise.",
  },
  {
    image: pisces,
    title:"Today's Horoscope ",
    details: "Pisces, it's a day for intuition and compassion. Trust your instincts and connect with your empathetic nature. It's an excellent time for helping others and showing kindness. In love, express your deep emotions. ",
    luckyNumber:"Lucky numbers: 6, 14, 27.",
    luckyColor:"Lucky color: Seafoam Green",
  },
 
];

const FlippableCard = ({ zodiac }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flippable-element ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="element-front">
        {zodiac.name}
        <img src={zodiac.image} alt={zodiac.name} height={330} width={250} style={{borderRadius:"15px"}}/>
      </div>
      <div className="element-back">
        <div className='back-details'>
          <div style={{fontWeight:'bold',fontSize:'18px', textAlign:'center'}}>{zodiac.title}</div>
          {zodiac.details}
        <br />
        {zodiac.luckyNumber}
        <br />
        {zodiac.luckyColor}
        </div>
      </div>
    </div>
  );
};

const ThreeRowsOfFour = () => {
  return (
    <div className="horo-sidebar">
      <Sidebar />
      <div className="flippable-cards">
        <div class="d-flex justify-content-between">
          <div class="p-2 navbarTitle" style={{ marginLeft: "1.5%" }}>Today's Horoscope</div>
          <div class="d-flex">
            <div class="p-2 d-flex">
              <img src={coins} alt="" height={50} />
              <p style={{ marginTop: '10px' }}>
                {Math.floor(Math.random() * (1000 - 100 + 1)) + 100}
              </p>
            </div>
            <div class="p-2 d-flex">
              <img src={profilePic} alt="" />
              <p style={{ marginTop: '10px' }}>Katrina Petrova</p>
            </div>
          </div>
        </div>
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="flippable-row">
            {[...Array(4)].map((_, colIndex) => (
              <FlippableCard key={colIndex} zodiac={zodiacSigns[rowIndex * 4 + colIndex]} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeRowsOfFour;