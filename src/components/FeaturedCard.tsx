import React from "react";
import "./css/featuredCard.css";
const FeaturedCard = (props: any) => {
    return (
        <>
            <div className="featured-card" key={props.key}>
                <img
                    src={props.img}
                    className="featured-img"
                    alt="featured-img"
                />
                <div className="featured-body">
                    <h3 className="featured-title">{props.heading}</h3>
                    <p className="featured-text">{props.paragraph}</p>
                    <p className="featured-author"> By {props.author}</p>
                </div>
            </div>
        </>
    );
};

export default FeaturedCard;
