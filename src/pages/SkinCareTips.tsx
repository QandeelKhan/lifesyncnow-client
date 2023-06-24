import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../components/css/skinCareTips.css";
import FeaturedCard from "../components/FeaturedCard";
import HeaderBanner from "../components/HeaderBanner";
import OlderCard from "../components/OlderCard";
import RecentCard from "../components/RecentCard";
import SectionHeading from "../components/SectionHeading";
import axios from "axios";
import PageTemplate from "../components/PageTemplate";
import { setSelectedPost } from "../redux/dataSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageMainHeading from "../components/PageMainHeading";
import SubCategory from "../components/SubCategory";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import "../components/css/subcategory.css";
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
        "  SERUMS",
        "SUMMER SKIN CARE",
        "SUNSCREEN",
        "WINTER SKIN CARE",
    ];

    const [mostRecentPosts, setMostRecentPosts] = useState([]);
    const [skinCareTips, setSkinCareTips] = useState([]);
    // const [topics, setTopics] = useState<any>([]);
    const [olderPosts, setOlderPosts] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [topicSlug, setTopicSlug] = useState([]);
    const [data, setData] = useState<any>([]);
    const [topics, setTopics] = useState<any[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/category/skin-care-tips/");
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
                setSkinCareTips(filteredSkinCareTips);

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

                setTopics(extractedTopics);

                // topics.forEach((topicName: any) => {
                //     if (!topics.includes(topicName.topic_name)) {
                //         setTopics((prevTopics: any) => [
                //             ...prevTopics,
                //             topicName.topic_name,
                //         ]);
                //     }
                // });
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

export default SkinCareTips;
