import React from "react";

const RewardSection = () => {
    return (
        <>
            {" "}
            <div className="rewards-main-container">
                <div className="reward-container">
                    <div className="left-side">
                        <div className="image">
                            <img src="Well-logo.png" alt="logo" />
                        </div>
                        <span>
                            Join our Well+ ambassador program to access to
                            perks, rewards, and content you can’t find anywhere
                            else.
                        </span>
                        <a href="/">JOIN TODAY</a>
                    </div>
                    <div className="right-side">
                        <span>Rewards Include:</span>
                        <div className="first-reward">
                            <h1>01</h1>
                            <span>
                                Refer 1 friend get a limited LIFESYNCNOW sticker
                                pack
                            </span>
                        </div>
                        <div className="first-reward">
                            <h1>02</h1>
                            <span>
                                Refer 1 friend get a limited LIFESYNCNOW sticker
                                pack
                            </span>
                        </div>
                        <div className="first-reward">
                            <h1>03</h1>
                            <span>
                                Refer 1 friend get a limited LIFESYNCNOW sticker
                                pack
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RewardSection;
