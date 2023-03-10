import React from "react";
import { Helmet } from "react-helmet";
import BlogpostCard from "../components/BlogpostCard";
import "../components/css/home.css";
import FeaturedCard from "../components/FeaturedCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsletterForm from "../components/NewsletterForm";
import RecentCard from "../components/RecentCard";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>our-blog-client</title>
                <meta
                    name="description"
                    content="Welcome to the portfolio of Qandeel Khan, a Full Stack Developer specializing in Python, Django, and React. Browse his projects, skills, and experience."
                />
                <meta
                    name="keywords"
                    content="Qandeel Khan, Full Stack Developer, Python, Django, React, Portfolio, Projects, Skills, Experience"
                />
                <meta name="author" content="Qandeel Khan" />
                <meta name="robots" content="index,follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
            <section id="home">
                <div className="home-container">
                    <FeaturedCard/>
                    <RecentCard/>
                </div>
            </section>
        </>
    );
};

export default Home;
