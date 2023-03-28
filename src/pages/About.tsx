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

            {/* OUR PURPOSE SECTION STARTS HERE */}
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

            {/* THIRD SECTION STARTS HERE */}
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

            {/* WE BELIEVE SECTION STARTS HERE */}
            <div className="we-believe-main-container">
                <h1>We Believe</h1>
                <div className="points-main-container">
                    <div className="left-points-container">
                        <div className="point">
                            <h3>1</h3>
                            <span>
                                Well-being is a right for all, and we have a
                                responsibility to challenge the systems that
                                prevent people from living a well life.
                            </span>
                        </div>
                        <div className="point">
                            <h3>2</h3>
                            <span>
                                In journalism and a research-backed approach.
                            </span>
                        </div>
                        <div className="point">
                            <h3>3</h3>
                            <span>
                                That lived experience is also valid,
                                particularly for marginalized communities.
                            </span>
                        </div>
                        <div className="point">
                            <h3>4</h3>
                            <span>
                                Wellness is deeply personal and ever evolving:
                                what works at 27 may not at 52 and beyond—we’re
                                committed to meeting you wherever you are.
                            </span>
                        </div>
                        <div className="point">
                            <h3>5</h3>
                            <span>
                                That people's relationships with health, health
                                care, and wellness are impacted differently by
                                their race and ethnicity, socioeconomics,
                                gender, sexuality, and ability. As such, we
                                strive to make our content relevant and
                                accessible to as many different kinds of people
                                as possible.
                            </span>
                        </div>
                        <div className="point">
                            <h3>6</h3>
                            <span>
                                We can not truly be well if the planet is not.
                            </span>
                        </div>
                    </div>
                    <div className="right-points-container">
                        <div className="point">
                            <h3>7</h3>
                            <span>
                                Community care is self care, and we’ll continue
                                to foster ours in all areas, with acknowledgment
                                of when we fall short.
                            </span>
                        </div>
                        <div className="point">
                            <h3>8</h3>
                            <span>
                                Mental health is just as important as physical
                                health.
                            </span>
                        </div>
                        <div className="point">
                            <h3>9</h3>
                            <span>
                                Wellness is always changing, and trend
                                forecasting is core to our DNA.
                            </span>
                        </div>
                        <div className="point">
                            <h3>10</h3>
                            <span>
                                In a holistic approach to wellness, and that we
                                have a duty to acknowledge and amplify the
                                cultural roots of practices and rituals that we
                                cover.
                            </span>
                        </div>
                        <div className="point">
                            <h3>11</h3>
                            <span>
                                Access to healthy ingredients and the
                                opportunity to attend fitness classes and other
                                wellness experiences is a privilege. We aim to
                                open doors and provide accessible resources and
                                alternatives for all.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR TEAM SECTION STARTS HERE */}
            <div className="our-team-main-container">
                <div className="our-team-left">
                    <h1>OUR TEAM</h1>
                    <span>
                        Who's who on the content and growth team at Well+Good
                    </span>
                    <a href="/">SEE THE MASTHEAD</a>
                </div>
                <div className="our-team-right">
                    <img src="our-team.webp" alt="responsive" />
                </div>
            </div>
        </>
    );
};

export default About;
