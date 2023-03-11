import React from "react";
import { OlderData } from "../data";
import "./css/olderCard.css";
import SectionHeading from "./SectionHeading";
const OlderCard = () => {
    return (
        <>
            <div className="older-container">
                {OlderData.map((older) => (
                    <div className="older-card" key={older.id}>
                        <img
                            src={older.img}
                            className="older-img"
                            alt="Card image"
                        />
                        <div className="older-body">
                            <h3 className="older-title">{older.heading}</h3>
                            <p className="older-author"> By {older.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OlderCard;
