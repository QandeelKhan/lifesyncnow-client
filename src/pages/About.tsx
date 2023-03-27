import React from "react";
import PageTemplate from "../components/PageTemplate";
import "../components/css/about.css";
const About = () => {
    return (
        <>
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
            <div className="our-purpose-main-container">
                <div className="our-purpose-content">
                    <div className="text-content">
                        <span className="first-text">Our Purpose</span>
                        <span className="second-text">
                            Well-Being Is
                            <br /> Your Right
                        </span>
                        <span className="third-text">
                            Sitting at the cross-section of trends, service, and
                            evidence-based journalism, Well+Good works to
                            inform, empower, and educate communities and
                            individuals in the many ways your day-to-day impacts
                            your ability to live well. We believe that wellness
                            and health should be attainable for all, while
                            working to challenge the systems and barriers that
                            prevent that from becoming a reality for many. Your
                            well-being is a birthright. Wellness is how you get
                            there.
                        </span>
                    </div>
                </div>
                <div className="purpose-pics">
                    <div className="pics-content">
                        <div className="well-body">
                            <img src="well-body.png" />
                            <div className="border"></div>
                            <span className="well-first">Well Body</span>
                            <span className="well-second">
                                Physical health is just one piece of the puzzle,
                                but it’s an important one! Support your body
                                with food and movement so that it can best
                                support you.
                            </span>
                            <a href="/" className="well-third">
                                learn more
                            </a>
                        </div>
                        {/* <div className="well-mind">
                            <img src="well-body.png" />
                            <div className="border"></div>
                            <span>Well Body</span>
                            <span>
                                Physical health is just one piece of the puzzle,
                                but it’s an important one! Support your body
                                with food and movement so that it can best
                                support you.
                            </span>
                            <a href="/">learn more</a>
                        </div>
                        <div className="well-spirit">
                            <img src="well-body.png" />
                            <div className="border"></div>
                            <span>Well Body</span>
                            <span>
                                Physical health is just one piece of the puzzle,
                                but it’s an important one! Support your body
                                with food and movement so that it can best
                                support you.
                            </span>
                            <a href="/">learn more</a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="main-third-container">
                <div className="first-in-main">
                    <div className="left-text">
                        <span>
                            Well+Good is committed to diversity, equity, and
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
                                Well+Good aims to be a meaningfully diverse,
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
                                Well+Good aims to be a meaningfully diverse,
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

export default About;
