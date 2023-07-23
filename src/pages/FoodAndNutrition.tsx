import { useEffect, useState } from "react";
import "../css/skinCareTips.css";
import FeaturedCard from "../components/FeaturedCard";
import OlderCard from "../components/Cards/OlderCard";
import RecentCard from "../components/Cards/RecentCard";
import SectionHeading from "../components/SectionHeading";
import axios from "axios";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import PageMainHeading from "../components/PageTemplate/PageMainHeading";
import "../css/subcategory.css";
const SkinCareTips = () => {
    const [mostRecentPosts, setMostRecentPosts] = useState([]);
    // const [topics, setTopics] = useState<any>([]);
    const [olderPosts, setOlderPosts] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [topics, setTopics] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1/api/blog/category/food-and-nutrition/"
                );
                const data = response.data;

                // const slugs = data.map((obj: any) => obj.topic.topic_slug);
                // console.log(slugs);
                // setTopicSlug(slugs);
                // setData(data);

                // Filter posts based on most_recent_posts, older_post, and featured_posts fields
                const filteredSkinCareTips = data.filter(
                    (post: any) => post.category_name === "FOOD AND NUTRITION"
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

                setTopics(extractedTopics);
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
                    {olderPosts.map((older: any, index) => (
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

export default SkinCareTips;
