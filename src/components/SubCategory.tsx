import React from "react";
import "./css/subcategory.css";
const SubCategory = (props: any) => {
    return (
        <div className="sub-category-container">
            <div className="sub-category">
                {props.categories.map((subcat: any, index: any) => (
                    <ul key={index}>
                        <li key={index}>
                            {" "}
                            <a href="">{subcat}</a>{" "}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default SubCategory;
