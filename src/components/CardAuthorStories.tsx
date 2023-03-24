import React from "react";
import "./css/cardauthorstories.css";

const CardAuthorStories = (props: any) => {
    return (
        <section className="author-strories-section">
            <div className="stories-author">
                <h2 className="author-name">{props.firstName}'s Stories</h2>
                <hr className="break" />
            </div>
            <div className="story-card">
                <img src={props.postImage} className="story-img" alt="Card" />
                <div className="story-body">
                    <p className="story-category">FOUNDATIONS & CONCEALERS</p>
                    <p className="story-title">{props.postTitle}</p>
                    <p className="story-line">I'm in Love</p>
                    <div className="story-author">
                        <img
                            // src="https://www.wellandgood.com/wp-content/uploads/2022/03/ZW-Headshot-500x500.jpg"
                            src={props.authorImage}
                            className="author-img"
                            alt=""
                        />
                        <p className="author-name"> By {props.fullName}</p>
                    </div>
                </div>
            </div>
            {/* <div className="story-card">
                <img
                    src="https://www.wellandgood.com/wp-content/uploads/2023/02/Changemakers_2023__How-Beauty-Became-More-About-Caring-for-Yourself-Than-Looking-Good-for-Other-People_art_490x328_true_75.webp"
                    className="story-img"
                    alt="Card image"
                />
                <div className="story-body">
                    <p className="story-category">FOUNDATIONS & CONCEALERS</p>
                    <p className="story-title">
                        This ‘Super Skin’ Foundation Serum Makes My Dry,
                        Discolored Skin Look Like the Best Version of Itself
                    </p>
                    <p className="story-line">I'm in Love</p>
                    <div className="story-author">
                        <img
                            src="https://www.wellandgood.com/wp-content/uploads/2022/03/ZW-Headshot-500x500.jpg"
                            className="author-img"
                            alt=""
                        />
                        <p className="author-name"> By MISS Zoe</p>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default CardAuthorStories;
