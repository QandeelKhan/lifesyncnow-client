import React from "react";
import "../css/olderCard.css";

interface olderCardprops {
    cover_image: string;
    title: string;
    authorSlug: string;
}
const OlderCard = ({ cover_image, title, authorSlug }: olderCardprops) => {
    return (
        <>
            <div className="older-card">
                <img src={cover_image} className="older-img" alt="Card image" />
                <div className="older-body">
                    <a href="">
                        <p className="older-title">{title}</p>
                    </a>
                    <span className="older-author">
                        {" "}
                        By <a href="">{authorSlug}</a>{" "}
                    </span>
                </div>
            </div>
        </>
    );
};

export default OlderCard;
