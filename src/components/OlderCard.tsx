import React from "react";
import { OlderData } from "../data";
import "./css/olderCard.css";
import SectionHeading from "./SectionHeading";
const OlderCard = (props: any) => {
    return (
        <>
            <div className="older-card" key={props.id}>
                <img src={props.img} className="older-img" alt="Card image" />
                <div className="older-body">
                    <p className="older-title">{props.heading}</p>
                    <p className="older-author"> By {props.author}</p>
                </div>
            </div>
        </>
    );
};

export default OlderCard;
