import React, { useState } from "react";

const SearchBar = (props: any) => {
    const [searchBar, setSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e: any) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.handleSearch(searchQuery);
    };

    const handleSearchBar = () => {
        setSearchBar(!searchBar);
    };
    return (
        <div
            className={`hidden-search-main-container ${
                searchBar ? "active" : ""
            }`}
        >
            <form onSubmit={handleSubmit} className="search-area">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder="Search posts"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <div className="search-button-container">
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
