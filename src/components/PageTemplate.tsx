import React, { ReactNode } from "react";
import "./css/page-template.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsletterForm from "./NewsletterForm";

// if don't expect the type of children then write react node else the type i/e string number boolean etc
// TODO: install react dev tools in browser to see the components and props hierarchy
interface props {
    children: ReactNode;
}

const PageTemplate = ({ children }: props) => {
    return (
        <>
            <Navbar />
            <div className="template-children">{children}</div>
            <NewsletterForm />
            <Footer />
        </>
    );
};

export default PageTemplate;
