import { useEffect, useState } from "react";
import "../css/skinCareTips.css";
import FeaturedCard from "../components/FeaturedCard";
import OlderCard from "../components/Cards/OlderCard";
import RecentCard from "../components/Cards/RecentCard";
import SectionHeading from "../components/SectionHeading";
import axios from "axios";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { useParams } from "react-router-dom";
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

const PostTopic = () => {
    const { slug } = useParams();
    const [mostRecentPosts, setMostRecentPosts] = useState([]);
    const [olderPosts, setOlderPosts] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/blog/category/skin-care-tips/${slug}`
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
                // setTopics(data[0]?.topics_name[0] || []);

                // Update state with filtered data
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // const handleNavigate = (post: any) => {
    //     navigate(`/post/${post.slug}`);
    // };

    return (
        <PageTemplate>
            <div className="home-container">
                <SectionHeading heading="Featured" />
                <div className="featured-container ">
                    {featuredPosts.map((feature: any) => (
                        <FeaturedCard
                            key={feature.id}
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
                            // {...dispatch(setSelectedPost(recent))}
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
                            key={older.id}
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

export default PostTopic;
