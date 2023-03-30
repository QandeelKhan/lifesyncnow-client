import React, { useEffect, useState } from "react";
import "./css/landingpopup.css";
const LandingPopUp = () => {
    const [isHidden, setIsHidden] = useState(false);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    const hiddenStyle = {
        display: isHidden ? "none" : "flex",
    };

    return (
        <div className="pop-up-main" style={hiddenStyle}>
            <div className="pop-up">
                <div className="content-container">
                    <div className="close">
                        {" "}
                        <i
                            className="fa-solid fa-xmark"
                            onClick={toggleVisibility}
                        ></i>
                    </div>
                    <div className="content">
                        <h3>Subscribe to Well+Good</h3>
                        <div className="desc">
                            <p>
                                Get your daily dose of wellness delivered
                                straight to your inbox.{" "}
                            </p>
                        </div>

                        <form className="pop-form">
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                            />
                            <button className="pop-btn">Sign Up</button>
                        </form>
                    </div>
                    <div className="bottom-line">
                        <span>Need Help?</span>
                        <a href="">
                            <span>Contact Support</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPopUp;
