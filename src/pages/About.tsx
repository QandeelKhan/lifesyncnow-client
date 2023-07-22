import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import "../components/css/about.css";
import PurposeAbout from "../components/About/PurposeAbout";
import ThirdAbout from "../components/About/ThirdAbout";
import BelieveAbout from "../components/About/BelieveAbout";
import TeamAbout from "../components/About/TeamAbout";
import CommunityAbout from "../components/About/CommunityAbout";
import RewardSection from "../components/RewardSection";
import ReachAbout from "../components/About/ReachAbout";
import BannerAbout from "../components/About/BannerAbout";
const About = () => {
    return (
        <PageTemplate>
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
        </PageTemplate>
    );
};

export default About;
