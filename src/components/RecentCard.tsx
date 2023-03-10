import React from "react";
import { recentData } from "../data";
import "./css/recentCard.css";
import SectionHeading from "./SectionHeading";
const RecentCard = (props: any) => {
    return (
        <>
            <div className="recent-card" key={props.id}>
                <img src={props.img} className="recent-img" alt="Card image" />
                <div className="recent-body">
                    <h3 className="recent-title">{props.heading}</h3>
                    <p className="recent-author">By {props.author}</p>
                </div>
            </div>
        </>
    );
};

export default RecentCard;
