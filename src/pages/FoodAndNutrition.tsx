import React from "react";
import BlogpostCard from "../components/BlogpostCard";
import "../components/css/foodAndNutrition.css";
import FeaturedCard from "../components/FeaturedCard";
import RecentCard from "../components/RecentCard";
const FoodAndNutrition = () => {
    return (
        <>
            <h2> Food And Nutrition</h2>
            <FeaturedCard />
            <RecentCard />
        </>
    );
};

export default FoodAndNutrition;
