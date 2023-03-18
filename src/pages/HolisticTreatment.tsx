import React from "react";
import FeaturedCard from "../components/FeaturedCard";
import PageMainHeading from "../components/PageMainHeading";
import RecentCard from "../components/RecentCard";

const HolisticTreatment = () => {
    return (
        <>
            <PageMainHeading title="Holistic Treatment" />
            <FeaturedCard />
            {/* <RecentCard/> */}
            <RecentCard />
        </>
    );
};

export default HolisticTreatment;
