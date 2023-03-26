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
                    <h3 className="featured-title">{title}</h3>
                    <p className="featured-text">{subTitle}</p>
                    <p className="featured-author"> By {authorSlug}</p>
                </div>
            </div>
        </>
    );
};

export default FeaturedCard;
