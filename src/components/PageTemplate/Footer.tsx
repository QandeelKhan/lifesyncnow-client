import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = (props: any) => {
    return (
        <footer>
            <div className="col address">
                <h1 className="logo">{props.logoName}</h1>
                <p>{props.description}</p>

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
                <h4>{props.logoName}</h4>
                <Link to="/about">ABOUT US</Link>
                <Link to="/contact">CONTACT US</Link>
                <Link to="/privacy">PRIVACY POLICY</Link>
                <Link to="/terms-and-conditions">TERMS & CONDITIONS</Link>
                <Link to="/advertise">ADVERTISE</Link>
                {/* <Link to="/cookie-notice">Cookie Notice</Link> */}
            </div>
            <div className="col">
                <h4>Topics</h4>
                <Link to="/">SKIN CARE TIPS</Link>
                <Link to="/">FOOD AND NUTRITION</Link>
                <Link to="/">HOLISTIC TREATMENT</Link>
                <Link to="/">FITNESS TIPS</Link>
                <Link to="/">RELATIONSHIP TIPS</Link>
                <Link to="/">ENTERTAINMENT</Link>
            </div>
            <div className="follow">
                <h4>Follow Us</h4>

                {props.children}
            </div>

            {/* <div className="col install">
          <h4>For You</h4>
          <p>TRENDS</p>
         

        </div> */}
            <div className="copywrite">
                <p>{props.copywrite} </p>
            </div>
        </footer>
    );
};

export default Footer;
