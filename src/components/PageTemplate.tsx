import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import "./css/page-template.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsletterForm from "./NewsletterForm";

// TODO: install react dev tools in browser to see the components and props hierarchy

interface props {
    children: ReactNode;
}

const PageTemplate = ({ children }: props) => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/page-templates/"
                );
                const data = response.data;
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <div className="template-children">{children}</div>
            <NewsletterForm />
            {data.map((myData: any) => (
                <Footer
                    id={myData.id}
                    logoName={myData.logo_name}
                    description={myData.logo_description}
                    copyright={myData.copyright}
                >
                    <div className="icon">
                        <a href={myData.follow_us.facebook_link}>
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href={myData.follow_us.twitter_link}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={myData.follow_us.instagram_link}>
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href={myData.follow_us.pinterest_link}>
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                        <a href={myData.follow_us.youtube_link}>
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </Footer>
            ))}
        </>
    );
};

export default PageTemplate;
