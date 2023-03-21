import React, { useEffect, useState } from "react";
import "../components/css/foodAndNutrition.css";
import FeaturedCard from "../components/FeaturedCard";
import RecentCard from "../components/RecentCard";
import SectionHeading from "../components/SectionHeading";
import { FeaturedData, OlderData, recentData } from "../data";
import OlderCard from "../components/OlderCard";
import PageTemplate from "../components/PageTemplate";
import PageMainHeading from "../components/PageMainHeading";
import SubCategory from "../components/SubCategory";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const subcategory = ["PLANT BASED", "YOU VERSUS FOOD"];

const HolisticTreatment = () => {
    const [mostRecentPosts, setMostRecentPosts] = useState([]);
    const [skinCareTips, setSkinCareTips] = useState([]);
    const [olderPosts, setOlderPosts] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/blog/posts-list"
                    // "https://0469-2400-adc7-3103-2000-405e-2a4e-bc14-91d0.in.ngrok.io/api/blog/posts-list"
                );
                const data = response.data;

                // Filter posts based on most_recent_posts, older_post, and featured_posts fields
                const filteredSkinCareTips = data.filter(
                    (post: any) => post.category_name === "food-and-nutrition"
                );
                if (filteredSkinCareTips) {
                    const mostRecentSkinCarePosts = filteredSkinCareTips.filter(
                        (post: any) => post.most_recent_posts
                    );
                    setMostRecentPosts(mostRecentSkinCarePosts);
                }
                if (filteredSkinCareTips) {
                    const filteredOlderPosts = filteredSkinCareTips.filter(
                        (post: any) => post.older_posts
                    );
                    setOlderPosts(filteredOlderPosts);
                }
                if (filteredSkinCareTips) {
                    const filteredFeaturedPosts = filteredSkinCareTips.filter(
                        (post: any) => post.featured_posts
                    );
                    setFeaturedPosts(filteredFeaturedPosts);
                }

                // Update state with filtered data
                setSkinCareTips(filteredSkinCareTips);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/post-detail");
    };
    return (
        <PageTemplate>
            <PageMainHeading title="Food And Nutrition" />
            <SubCategory categories={subcategory} />
            <div className="home-container">
                <SectionHeading heading="Featured" />

                <div className="featured-container">
                    {FeaturedData.map((feature) => (
                        <FeaturedCard
                            key={feature.id}
                            img={feature.img}
                            heading={feature.heading}
                            paragraph={feature.paragraph}
                            author={feature.author}
                        />
                    ))}
                </div>
                <SectionHeading heading="Most Recent" />
                <div className="recent-container ">
                    {/* {mostRecentPosts.map((recent: any) => (
                        <Link
                            to="/post-detail"
                            onClick={() => dispatch(setSelectedPost(recent))}
                        >
                            <RecentCard
                                key={recent.id}
                                img={recent.cover_image}
                                heading={recent.title}
                                author={recent.full_name}
                            />
                        </Link>
                    ))} */}
                    {mostRecentPosts.map((recent: any) => (
                        <RecentCard
                            id={recent.id}
                            // handleNavigate={handleNavigate}
                            cover_image={recent.cover_image}
                            title={recent.title}
                            full_name={recent.full_name}
                        />
                    ))}
                </div>
                <SectionHeading heading="Older Post" />
                <div className="older-container">
                    {OlderData.map((older) => (
                        <OlderCard
                            key={older.id}
                            img={older.img}
                            heading={older.heading}
                            author={older.author}
                        />
                    ))}
                </div>
            </div>
        </PageTemplate>
    );
};

export default HolisticTreatment;
