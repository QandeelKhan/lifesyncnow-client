import React from "react";

const ThirdAbout = () => {
    return (
        <>
            <div className="main-third-container">
                <div className="first-in-main">
                    <div className="left-text">
                        <span>
                            LIFESYNCNOW is committed to diversity, equity, and
                            inclusion (DEI) in our content and practices.
                        </span>
                    </div>
                    <div className="right-pic">
                        <img src="well-body.png" alt="" />
                    </div>
                </div>
                <div className="second-in-main">
                    <div className="heading">
                        <span>What This Looks Like</span>
                    </div>
                    <div className="three-paras">
                        <div className="para">
                            <h1>Diverse Perspectives</h1>
                            <span>
                                LIFESYNCNOW aims to be a meaningfully diverse,
                                inclusive, and welcoming space for all people—on
                                our team and in our community. We seek to do
                                this by further diversifying our contributor and
                                talent pool, speaking with expert sources of
                                varying backgrounds and abilities within our
                                content, integrating DEI in our corporate hiring
                                practices, and more.
                            </span>
                        </div>
                        <div className="para">
                            {" "}
                            <h1>Ongoing Education</h1>
                            <span>
                                LIFESYNCNOW aims to be a meaningfully diverse,
                                inclusive, and welcoming space for all people—on
                                our team and in our community. We seek to do
                                this by further diversifying our contributor and
                                talent pool, speaking with expert sources of
                                varying backgrounds and abilities within our
                                content, integrating DEI in our corporate hiring
                                practices, and more.
                            </span>
                        </div>
                        <div className="para">
                            {" "}
                            <h1>Our 15% Pledge</h1>
                            <span>
                                We pledge that a minimum of 15% of our shopping
                                content will feature brands with founders,
                                owners, or leaders from historically
                                underrepresented groups.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThirdAbout;
