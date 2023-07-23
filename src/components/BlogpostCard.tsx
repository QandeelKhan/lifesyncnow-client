import React from "react";
import { ContactData } from "../DummyData/data";
import "./css/blogpostCard.css";
const firstObject = ContactData[0];
const paragraphs = firstObject.paragraphs;

const BlogpostCard = () => {
    return (
        <div className="sample">
            {ContactData.map((data) => (
                <h2>{data.title}</h2>
            ))}
        </div>
    );
};

export default BlogpostCard;
