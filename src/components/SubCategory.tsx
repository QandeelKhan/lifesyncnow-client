import React from "react";
import "./css/subcategory.css";

// TODO: create the interface (on your own!)
const SubCategory = (props: any) => {
    return (
        <div className="sub-category-container">
            <div className="sub-category">
                {/* TODO:WHY ITERATE IN PROPS WITHOUT TELLING THE TEAM?,IS'T THAT CREATE AMBIGUITY FOR OTHERS! */}
                {props.categories.map((subcat: any, index: any) => (
                    <ul key={index}>
                        <li key={index}>
                            {" "}
                            <a href={`/topic/${props.slug}`}>{subcat}</a>{" "}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default SubCategory;
