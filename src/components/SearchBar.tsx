import React, { useState } from "react";

const SearchBar = () => {
    const [searchBar, setSearchBar] = useState(false);

    const handleSearchBar = () => {
        setSearchBar(!searchBar);
    };
    return (
        <div
            className={`hidden-search-main-container ${
                searchBar ? "active" : ""
            }`}
        >
            <div className="search-area">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search Here..." />
            </div>
        </div>
    );
};

export default SearchBar;
