import React, { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import "../components/css/contact.css";
import axios from "axios";
const Contact = () => {
    const [contactUs, setContactUs] = useState<any>({});
    const [paragraphs, setParagraphs] = useState<any>([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/contact-us")
            .then((response) => {
                setContactUs(response.data[0]);
                setParagraphs(response.data[0].paragraphs);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <PageTemplate>
            {/* {console.log({ contactUs }, "this is claue data")} */}
            {/* {console.log({ paragraphs }, "this is data")} */}
            {/* {console.log({ subParagraphs }, "this is data")} */}
            <div className="contact-main-container">
                <div className="contact-heading">
                    <h1>{contactUs.title}</h1>
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
