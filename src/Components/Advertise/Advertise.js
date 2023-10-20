import React,{useState} from 'react'
import './Advertise.css'
import Navbar from '../Navbar/Navbar'
import KYUImg from "../../images/KYUImg.png";
import ChatBot from '../ChatBot/ChatBot';


function Advertise() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);
      
        setTimeout(() => {
          setIsSubmitting(false);
          setShowThankYou(true);
        }, 2000); 
      };
      
  return (
    <div>  <Navbar/>
  
    <div className='container-advertise'>
      
      <h1>Elevate Your Brand:  Advertise with Us</h1>
      <ul>
        <li>Submit your advertisement poster and a brief description of your business.</li>
        <li>Our admin team will review your submission for quality and content.</li>
        <li>Once approved, your ad will be published in our "Advertisement" section.</li>
        <li>Reach a wider audience and elevate your brand with us.</li>
        <li>Contact us for any questions or assistance.</li>
      </ul>
      <div className='file-input'>
      <input type="file"/>
      <p style={{color:'red'}}>Size of the file should not exceed 2MB</p>
      </div>
     
      <textarea rows="10" cols="90" placeholder='Tell us about your business, product, or service. Be creative, informative, and make your description stand out!'/>
      <button onClick={handleSubmit} disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>

    {showThankYou && (
      <div style={{paddingTop:30}}>
        <h2>Thank You for Your Submission!</h2>
        <p style={{textAlign:'center'}}>We'll reach out to you ASAP</p>
        
      </div>
    )}

    </div>
    
    <div className="footer">
        <div className="container">
        <div className="row">


        <div className="col-4 colpad">
          <img src={KYUImg} alt=""  />
        </div>

        <div className="col-2">
          <ul style={{listStyle : "none",marginTop : "70px"}}>
            <li className="footer-text" >WEEBLY THEMES</li>
            <li className="footer-text" >PRE-Sale FAQS</li>
            <li className="footer-text" >SUBMIT A TICKET</li>
          </ul>
        </div>

        <div className="col-2">
        <ul style={{listStyle : "none",marginTop : "70px"}}>
            <li className="footer-text" >SERVICES</li>
            <li className="footer-text" >THEME TWEAK</li>
           
          </ul>
        </div>

        <div className="col-2">
        <ul style={{listStyle : "none",marginTop : "70px"}}>
            <li className="footer-text" >SHOWCASE</li>
            <li className="footer-text" >WIDGETKIT</li>
            <li className="footer-text" >SUPPORT</li>
          </ul>
        </div>

        <div className="col-2">
        <ul style={{listStyle : "none",marginTop : "70px"}}>
            <li className="footer-text" >ABOUT US</li>
            <li className="footer-text" >CONTACT US</li>
            <li className="footer-text" >AFFILIATES</li>
            <li className="footer-text" >RESOURCES</li>
          </ul>
        </div>


        </div>

        

      </div>

      </div>
<ChatBot/>
    </div>
  )
}

export default Advertise
