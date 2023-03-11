import React from "react";
import "./css/page-template.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsletterForm from "./NewsletterForm";

const PageTemplate = (props: any) => {
    return (
        <>
            <Navbar />
            <div>{props.children}</div>
            <NewsletterForm />
            <Footer />
        </>
    );
};

export default PageTemplate;
