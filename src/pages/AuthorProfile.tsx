import React from "react";
import AuthorBio from "../components/AuthorBio";
import CardAuthorStories from "../components/CardAuthorStories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsletterForm from "../components/NewsletterForm";
import PageTemplate from "../components/PageTemplate";

const AuthorProfile = () => {
    return (
        <>
            <Navbar />
            <AuthorBio />
            <CardAuthorStories />
            <NewsletterForm />
            <Footer />
        </>
    );
};

export default AuthorProfile;
