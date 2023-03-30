import React from "react";

const PurposeAbout = () => {
    return (
        <>
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
        </>
    );
};

export default PurposeAbout;
