import React, { useEffect, useState } from "react";
import FooterSubscribeForm from "./forms/FooterSubscribeForm";

interface SubscribeFormProps {
    apiUrl: string;
}
const LandingPopUp = () => {
    const apiUrl = "/api/subscribe/";
    // const apiUrl =
    //     process.env.REACT_APP_BASE_URL_DEVELOPMENT ||
    //     "http://localhost:8000/api/subscribe/";
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
                        <h3>Subscribe to LIFESYNCNOW</h3>
                        <div className="desc">
                            <p>
                                Get your daily dose of wellness delivered
                                straight to your inbox.{" "}
                            </p>
                        </div>
                        <FooterSubscribeForm apiUrl={apiUrl} />
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
