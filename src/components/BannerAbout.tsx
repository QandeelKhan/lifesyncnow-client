import React from "react";

const BannerAbout = () => {
    return (
        <>
            {" "}
            <div className="main-banner">
                {/* <img src="banner-image.jpeg" alt="" /> */}
                <div className="banner-text">
                    <span className="banner-first">About Well+Good</span>
                    <span className="banner-second">
                        Wellness for
                        <br /> everyone
                    </span>
                    <span className="banner-third">
                        Well+Good is your trusted advisor for navigating the
                        wide (and wild) world of wellness. Since our launch in
                        2010, we have set the standard for reporting and
                        trend-spotting on the healthy living beat in order to
                        help define and demystify what it means for you to live
                        a well life, inside and out.
                    </span>
                </div>
            </div>
        </>
    );
};

export default BannerAbout;
