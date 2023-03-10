import React from "react";
import { recentData } from "../data";
import "./css/recentCard.css";
import SectionHeading from "./SectionHeading";
const RecentCard = () => {
    return (
        <>
            <div className="recent-section">
                <SectionHeading heading="Most Recent" />
                <div className="recent-container">
                    {recentData.map((recent) => (
                        <div className="recent-card" key={recent.id}>
                            <img
                                src={recent.img}
                                className="recent-img"
                                alt="Card image"
                            />
                            <div className="recent-body">
                                <h3 className="recent-title">
                                    {recent.heading}
                                </h3>
                                <p className="recent-author">
                                    {" "}
                                    By {recent.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RecentCard;
