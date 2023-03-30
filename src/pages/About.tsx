import React from "react";
import PageTemplate from "../components/PageTemplate";
import "../components/css/about.css";
import PurposeAbout from "../components/PurposeAbout";
import ThirdAbout from "../components/ThirdAbout";
import BelieveAbout from "../components/BelieveAbout";
import TeamAbout from "../components/TeamAbout";
import CommunityAbout from "../components/CommunityAbout";
import RewardSection from "../components/RewardSection";
import ReachAbout from "../components/ReachAbout";
import BannerAbout from "../components/BannerAbout";
const About = () => {
    return (
        <>
            <BannerAbout />
            {/* OUR PURPOSE SECTION STARTS HERE */}
            <PurposeAbout />
            {/* THIRD SECTION STARTS HERE */}
            <ThirdAbout />
            {/* WE BELIEVE SECTION STARTS HERE */}
            <BelieveAbout />
            {/* OUR TEAM SECTION STARTS HERE */}
            <TeamAbout />
            {/* OUR COMMUNITY SECTION STARTS HERE */}
            <CommunityAbout />
            {/* REWARDS SECTION STARTS HERE */}
            <RewardSection />
            {/* OUR REACH STARTS HERE */}
            <ReachAbout />
        </>
    );
};

export default About;
