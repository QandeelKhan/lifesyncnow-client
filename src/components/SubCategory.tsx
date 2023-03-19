import React from "react";
import "./css/subcategory.css";
const SubCategory = (props: any) => {
    return (
        <div className="sub-category-container">
            <div className="sub-category">
                {props.categories.map((subcat: any) => (
                    <ul key={subcat.index}>
                        <li>
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
