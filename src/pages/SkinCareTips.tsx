import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../components/css/skinCareTips.css";
import FeaturedCard from "../components/FeaturedCard";
import HeaderBanner from "../components/HeaderBanner";
import OlderCard from "../components/OlderCard";
import RecentCard from "../components/RecentCard";
import SectionHeading from "../components/SectionHeading";
import { FeaturedData, recentData } from "../data";
import axios from "axios";

const SkinCareTips = () => {
    const [mostRecentPosts, setMostRecentPosts] = useState([]);
    const [olderPosts, setOlderPosts] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/blog/posts-list"
                );
                const data = response.data;

                // Filter posts based on most_recent_posts, older_post, and featured_posts fields
                const filteredMostRecentPosts = data.filter(
                    (post: any) => post.most_recent_posts
                );
                const filteredOlderPosts = data.filter(
                    (post: any) => post.older_post
                );
                const filteredFeaturedPosts = data.filter(
                    (post: any) => post.featured_posts
                );

                // Update state with filtered data
                setMostRecentPosts(filteredMostRecentPosts);
                setOlderPosts(filteredOlderPosts);
                setFeaturedPosts(filteredFeaturedPosts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="home-container">
                <SectionHeading heading="Featured" />
                <div className="featured-section ">
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
                    {mostRecentPosts.map((recent: any) => (
                        <RecentCard
                            key={recent.id}
                            img={recent.cover_image}
                            heading={recent.title}
                            author={recent.full_name}
                        />
                    ))}
                </div>
                <OlderCard />
            </div>
        </>
    );
};

export default SkinCareTips;
