import React from "react";
import "./css/landingpopup.css";
const LandingPopUp = () => {
    return (
        <div className="pop-up-main">
            <div className="pop-up">
                <div className="content-container">
                    <div className="close">
                        {" "}
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="content">
                        <h3>Subscribe to Well+Good</h3>
                        <div className="desc">
                            <p>
                                Get your daily dose of wellness delivered
                                straight to your inbox.{" "}
                            </p>
                        </div>

                        <form className="form">
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                            />
                            <button className="normal">Sign Up</button>
                        </form>
                        <div className="bottom-line">
                            <span>Need Help?</span>
                            <a href="">
                                <span>Contact Support</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPopUp;
