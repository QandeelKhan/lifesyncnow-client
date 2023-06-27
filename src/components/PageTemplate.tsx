import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import "./css/page-template.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsletterForm from "./NewsletterForm";
import { ClipLoader } from "react-spinners"; // Example: Using react-spinners

interface Props {
    children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const apiUrl = "/api/subscribe/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/page-templates/");
                const data = response.data;
                setData(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
                setError(error as string);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ClipLoader
                        color="#088178"
                        loading={isLoading}
                        size={100}
                    />
                </div>
                <div className="template-children">{children}</div>
                {/* <NewsletterForm apiUrl={apiUrl} /> */}
                <Footer
                    logoName="LIFE SYNC NOW LOGO"
                    description="LIFE SYNC NOW BLOG TAGLINE"
                    copyright="LIFE SYNC NOW COPYRIGHTS"
                >
                    <div className="icon">
                        <a href="facebook.com">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="instagram.com">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="pinterest.com">
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                        <a href="youtube.com">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </Footer>
            </>
        );
    }

    return (
        <>
            <Navbar />
            {error && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "3%",
                        marginBottom: "3%",
                    }}
                >
                    <h3>oops... No data comes from server</h3>
                </div>
            )}
            <div className="template-children">{children}</div>
            <NewsletterForm apiUrl={apiUrl} />
            {data.map((myData: any) => (
                <Footer
                    key={myData.id}
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
