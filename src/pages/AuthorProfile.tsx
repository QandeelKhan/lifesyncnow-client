import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AuthorBio from "../components/AuthorBio";
import CardAuthorStories from "../components/Cards/CardAuthorStories";
import Footer from "../components/PageTemplate/Footer";
import Navbar from "../components/Navbar";
import NewsletterForm from "../components/NewsletterForm";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { RootState } from "../redux/store";

const AuthorProfile = () => {
    const selectedPost = useSelector(
        (state: RootState) => state.data.selectedPost
    );

    const [author, setAuthor] = useState<any>(null);
    const { slug } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/profile/${slug}/`);
                const data = response.data;
                setAuthor(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            {author !== null && (
                <>
                    <AuthorBio
                        profileImage={author.profile_image}
                        fullName={author.full_name}
                        roleName={author.role_name}
                        bio={author.bio}
                        instagramAccount={author.instagram_acc}
                        twitterAccount={author.twitter_acc}
                    />
                    {author.related_posts.map((post: any) => (
                        <CardAuthorStories
                            firstName={author.first_name}
                            postTitle={post.title}
                            postImage={post.cover_image}
                            fullName={author.full_name}
                            authorImage={author.profile_image}
                            postSlug={post.slug}
                            userSlug={author.user_slug}
                        />
                    ))}
                </>
            )}
            {/* <NewsletterForm apiUrl=} /> */}
            <Footer />
        </>
    );
};

export default AuthorProfile;
