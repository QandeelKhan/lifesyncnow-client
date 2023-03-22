import React from "react";
import { recentData } from "../data";
import "./css/recentCard.css";
import SectionHeading from "./SectionHeading";
const RecentCard = (props: any) => {
    return (
        <>
            <div className="recent-card" key={props.key}>
                <img
                    src={props.cover_image}
                    className="recent-img"
                    alt="Card"
                />
                <div className="recent-body">
                    <h3 className="recent-title" onClick={props.handleNavigate}>
                        {props.title}
                    </h3>
                    <p className="recent-author">By {props.full_name}</p>
                </div>
            </div>
        </>
    );
};

export default RecentCard;
