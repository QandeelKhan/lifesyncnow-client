import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorBio from "../components/AuthorBio";
import CardAuthorStories from "../components/Cards/CardAuthorStories";
import Footer from "../components/PageTemplate/Footer";
import Navbar from "../components/Navbar";

const AuthorProfile = () => {
    const [author, setAuthor] = useState<any>(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1/api/profile/${slug}/`
                );
                const data = response.data;
                setAuthor(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [slug]);
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
                    {author.related_posts.map((post: any, index: any) => (
                        <CardAuthorStories
                            key={index}
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
