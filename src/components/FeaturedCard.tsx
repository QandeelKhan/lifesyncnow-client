import React from "react";
import "./css/featuredCard.css";
interface featureCardprops {
    cover_image: string;
    title: string;
    subTitle: string;
    authorSlug: string;
}
const FeaturedCard = ({
    cover_image,
    title,
    subTitle,
    authorSlug,
}: featureCardprops) => {
    return (
        <>
            <div className="featured-card">
                <div className="featured-img-container">
                    <img
                        src={cover_image}
                        className="featured-img"
                        alt="featured-img"
                    />
                </div>
                <div className="featured-body">
                    <a href="" className="featured-title">
                        <h3>{title}</h3>
                    </a>
                    <p className="featured-text">{subTitle}</p>
                    <a href="" className="featured-author">
                        {" "}
                        By <span>{authorSlug}</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default FeaturedCard;
