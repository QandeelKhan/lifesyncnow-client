import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchBar, setSearchQuery } from "../redux/reducers/eventsSlice";
import "./css/searchbar.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SearchBar = (props: any) => {
    const { searchQuery, searchBar } = useSelector(
        (state: RootState) => state.events
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search/${searchQuery}`);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value));
        dispatch(setSearchBar(true));
    };
    const handleSearchClose = () => {
        dispatch(setSearchBar(false));
    };

    return (
        <>
            {searchBar && (
                <div className="sidebar-overlay" onClick={handleSearchClose} />
            )}
            <div
                className={`hidden-search-main-container ${
                    searchBar ? "active" : ""
                }`}
            >
                <form onSubmit={handleSearch} className="search-area">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Search Here..."
                        onChange={handleInputChange}
                        ref={props.inputRef} // assign the ref to the input element
                    />
                </form>
            </div>
        </>
    );
};

export default SearchBar;
