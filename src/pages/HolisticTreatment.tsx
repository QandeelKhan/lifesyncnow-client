import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../components/css/skinCareTips.css";
import FeaturedCard from "../components/FeaturedCard";
import HeaderBanner from "../components/HeaderBanner";
import OlderCard from "../components/OlderCard";
import RecentCard from "../components/RecentCard";
import SectionHeading from "../components/SectionHeading";
import { FeaturedData, OlderData, recentData } from "../data";
import axios from "axios";
import PageTemplate from "../components/PageTemplate";
import { setSelectedPost } from "../redux/dataSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageMainHeading from "../components/PageMainHeading";
import SubCategory from "../components/SubCategory";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
const subcategory = [];

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
                );
                const data = response.data;

                // Filter posts based on most_recent_posts, older_post, and featured_posts fields
                const filteredSkinCareTips = data.filter(
                    (post: any) => post.category_name === "SKIN-CARE TIPS"
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

    const selectedPost = useSelector(
        (state: RootState) => state.data.selectedPost
    );

    const handleNavigate = (post: any) => {
        navigate(`/post/${selectedPost.slug}`);
        // dispatch(setSelectedPost(post));
    };
    // const handleNavigate = (post: any) => {
    //     navigate(`/post/${post.slug}`);
    // };

    return (
        <PageTemplate>
            <PageMainHeading title="Holistic Treatment" />
            {/* <SubCategory categories={subcategory} /> */}

            {/* {console.log(`most recent posts: ${mostRecentPosts}`)} */}
            {/* {console.log(`skin care tips: ${skinCareTips}`)} */}
            {/* {console.log(skinCareTips)} */}
            {/* {console.log(mostRecentPosts)} */}
            <div className="home-container">
                <SectionHeading heading="Featured" />
                <div className="featured-container ">
                    {featuredPosts.map((feature: any) => (
                        <FeaturedCard
                            cover_image={feature.cover_image}
                            title={feature.title}
                            subTitle={feature.subTitle}
                            authorSlug={feature.author.user_slug}
                        />
                    ))}
                </div>
                <SectionHeading heading="Most Recent" />
                <div className="recent-container ">
                    {mostRecentPosts.map((recent: any) => (
                        // <div key={recent.id}>
                        <RecentCard
                            // {...dispatch(setSelectedPost(recent))}
                            key={recent.id}
                            cover_image={recent.cover_image}
                            title={recent.title}
                            full_name={recent.full_name}
                            authorSlug={recent.author.user_slug}
                            postSlug={recent.slug}
                        />
                        // </div>
                    ))}
                </div>
                <SectionHeading heading="Older Post" />
                <div className="older-container">
                    {olderPosts.map((older: any) => (
                        <OlderCard
                            cover_image={older.cover_image}
                            title={older.title}
                            authorSlug={older.author.user_slug}
                        />
                    ))}
                </div>
            </div>
        </PageTemplate>
    );
};

export default HolisticTreatment;
