import React from "react";
import "../css/pagemainheading.css";
const PageMainHeading = (props: any) => {
    return (
        <>
            <h2 className="main-heading">{props.title}</h2>
        </>
    );
};

export default PageMainHeading;
