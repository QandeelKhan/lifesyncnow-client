import React, { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import "../components/css/contact.css";
import axios from "axios";
import { ClipLoader } from "react-spinners";
const Contact = () => {
    const [Pages, setPages] = useState<any>({});
    const [paragraphs, setParagraphs] = useState<any>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/contact-us/");
                const PagesData = response.data[0];
                setPages(PagesData);
                const paragraphsData = response.data[0].paragraphs;
                setParagraphs(paragraphsData);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
                setError(error as string);
            }
        };
        fetchData();
    }, []);

    if (isLoading || error) {
        return (
            <>
                <PageTemplate>
                    <div className="contact-main-container">
                        <div className="contact-heading">
                            <h1>Contact Us</h1>
                        </div>

                        <div className="contact-content">
                            <ClipLoader
                                color="#088178"
                                loading={isLoading}
                                size={100}
                            />
                        </div>
                    </div>
                </PageTemplate>
            </>
        );
    }

    return (
        <PageTemplate>
            <div className="contact-main-container">
                <div className="contact-heading">
                    <h1>{Pages.title}</h1>
                </div>
                {/* TODO: correct it incase no data is comming from backend */}
                {paragraphs.map((paragraph: any) => (
                    <div key={paragraph.id} className="contact-content">
                        <h3>{paragraph.paragraph_title}</h3>
                        <span>{paragraph.paragraph_content}</span>
                        {/*  */}
                        <div className="contact-content types">
                            {paragraph.step_by_step_guide.map(
                                (subParagraph: any) => (
                                    <div className="advertise-categories">
                                        <div className="ist">
                                            <span className="head">
                                                {subParagraph.sub_heading}:{" "}
                                            </span>
                                            <span>
                                                {subParagraph.sub_content}
                                            </span>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        {/*  */}
                    </div>
                ))}
            </div>
        </PageTemplate>
    );
};

export default Contact;
