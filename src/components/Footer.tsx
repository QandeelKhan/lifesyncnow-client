import React from 'react'
import './css/footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="col address">
        <h1 className='logo'>Your logo here</h1>
        <p>YOUR HEALTHIEST RELATIONSHIP Well+Good decodes and <br/>
         demystifies what it means to live a well life, inside and out. Get it daily.</p>

        {/* <div className="follow">
          <h4>Follow Us</h4>
          
          <div className="icon">
            <i  className="fab fa-facebook-f"></i>
            <i  className="fab fa-twitter"></i>
            <i  className="fab fa-instagram"></i>
            <i  className="fab fa-pinterest-p"></i>
            <i  className="fab fa-youtube"></i>
          </div>
        </div> */}

      </div>

      <div className="col">
          <h4>Your logo here</h4>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS & CONDITIONS</a>
          <a href="#">ADVERTISE</a>
        </div>
        <div className="col">
          <h4>Topics</h4>
          <a href="#">SKIN-CARE TIPS</a>
          <a href="#">FOOD AND NUTRITION</a>
          <a href="#">HOLISTIC TREATMENT</a>
          <a href="#">FITNESS TIPS</a>
          <a href="#">RELATIONSHIP TIPS</a>
          <a href="#">ENTERTAIRMENT</a>
        </div>
        <div className="follow">
          <h4>Follow Us</h4>
          
          <div className="icon">
            <i  className="fab fa-facebook-f"></i>
            <i  className="fab fa-twitter"></i>
            <i  className="fab fa-instagram"></i>
            <i  className="fab fa-pinterest-p"></i>
            <i  className="fab fa-youtube"></i>
          </div>
        </div>


        {/* <div className="col install">
          <h4>For You</h4>
          <p>TRENDS</p>
         

        </div> */}
        <div className="copywrite">
          <p>© 2022 - You Blog  </p>
        </div>


    </footer>
  )
}

export default Footer