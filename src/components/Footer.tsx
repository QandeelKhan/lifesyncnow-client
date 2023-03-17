import React from "react";
import { Link } from "react-router-dom";
import "./css/footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="col address">
                <h1 className="logo">Your logo here</h1>
                <p>
                    YOUR HEALTHIEST RELATIONSHIP Well+Good decodes and <br />
                    demystifies what it means to live a well life, inside and
                    out. Get it daily.
                </p>

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
                <Link to="/">ABOUT US</Link>
                <Link to="/">CONTACT US</Link>
                <Link to="/">PRIVACY POLICY</Link>
                <Link to="/terms-and-conditions">TERMS & CONDITIONS</Link>
                <Link to="/">ADVERTISE</Link>
                <Link to="/cookie-notice">Cookie Notice</Link>
            </div>
            <div className="col">
                <h4>Topics</h4>
                <Link to="/">SKIN-CARE TIPS</Link>
                <Link to="/">FOOD AND NUTRITION</Link>
                <Link to="/">HOLISTIC TREATMENT</Link>
                <Link to="/">FITNESS TIPS</Link>
                <Link to="/">RELATIONSHIP TIPS</Link>
                <Link to="/">ENTERTAIRMENT</Link>
            </div>
            <div className="follow">
                <h4>Follow Us</h4>

                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>

            {/* <div className="col install">
          <h4>For You</h4>
          <p>TRENDS</p>
         

        </div> */}
            <div className="copywrite">
                <p>© 2022 - You Blog </p>
            </div>
        </footer>
    );
};

export default Footer;
