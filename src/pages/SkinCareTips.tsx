import React, { useEffect, useRef, useState } from "react";
import "../components/css/skinCareTips.css";
import FeaturedCard from "../components/FeaturedCard";
import HeaderBanner from "../components/PageTemplate/HeaderBanner";
import OlderCard from "../components/Cards/OlderCard";
import RecentCard from "../components/Cards/RecentCard";
import SectionHeading from "../components/SectionHeading";
import axios from "axios";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageMainHeading from "../components/PageTemplate/PageMainHeading";
import SubCategory from "../components/SubCategory";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import "../components/css/subcategory.css";
import ProgressBar from "../components/ProgressBars/ProgressBar";
const SkinCareTips = () => {
    const subcategory = [
        "ACNE CARE",
        "BEAUTY WEEKS",
        "BODY CARE",
        "DEAR DERM",
        "EXFOLIATORS",
        "FACE OILS",
        "MOISTURIZER",
        "NATURAL ACNE TREATMENT",
        "SERUMS",
        "SUMMER SKIN CARE",
        "SUNSCREEN",
        "WINTER SKIN CARE",
    ];

    const [mostRecentPosts, setMostRecentPosts] = useState([]);
    // const [topics, setTopics] = useState<any>([]);
    const [olderPosts, setOlderPosts] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [topics, setTopics] = useState<any[]>([]);
    const [isDataFetched, setIsDataFetched] = useState(false); // Track whether data has been fetched
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get("/category/skin-care-tips/");
                const response = await axios.get(
                    // "http://localhost:8000/api/blog/category/skin-care-tips/"
                    "http://127.0.0.1/api/blog/posts-list"
                );

                const data = response.data;
                // Filter posts based on most_recent_posts, older_post, and featured_posts fields
                const filteredSkinCareTips = data.filter(
                    (post: any) => post.category_name === "SKIN CARE TIPS"
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

                // getting topic array of objects
                // setTopics(data[0]);
                const topicsData = data[0]?.topics_name || [];
                const topicSlugs = data[0]?.topic_slug || [];
                // setTopics(data[0] || []);
                // setTopicSlug(data[0]?.topic_slug || []);
                const extractedTopics = topicsData.map(
                    (obj: any, index: number) => ({
                        name: obj,
                        slug: topicSlugs[index],
                    })
                );
                // Data fetching is complete, so set the flag to true
                setIsDataFetched(true);
                setTopics(extractedTopics);
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

    return (
        <PageTemplate>
            {isDataFetched ? <ProgressBar /> : null}
            <PageMainHeading title="SKIN CARE TIPS" />
            {/* <SubCategory categories={topics} slug={topicSlug} /> */}
            <div className="sub-category-container">
                <div className="sub-category">
                    {topics.map((topic: any, index: any) => (
                        <ul key={index}>
                            <li>
                                <a href={`/topic/${topic.slug}`}>
                                    {topic.name}
                                </a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="home-container">
                <SectionHeading heading="Featured" />
                <div className="featured-container ">
                    {featuredPosts.map((feature: any, index) => (
                        <FeaturedCard
                            key={index}
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
                        <RecentCard
                            key={recent.id}
                            cover_image={recent.cover_image}
                            title={recent.title}
                            full_name={recent.full_name}
                            authorSlug={recent.author.user_slug}
                            postSlug={recent.slug}
                        />
                    ))}
                </div>
                <SectionHeading heading="Older Post" />
                <div className="older-container">
                    {olderPosts.map((older: any, index) => (
                        <OlderCard
                            key={index}
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

export default React.memo(SkinCareTips);
