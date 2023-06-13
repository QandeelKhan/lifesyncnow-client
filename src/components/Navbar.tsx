import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./css/navbar.css";
import "../components/css/searchbar.css";
import { Link } from "react-router-dom";
// import SideBarToggle from "./SideBarToggle";
import "../components/css/sidebar.css";
import {
    setCrossClicked,
    setHamBurgerClicked,
    setNavVisible,
    setSearchBar,
} from "../redux/reducers/eventsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    // const [searchResults, setSearchResults] = useState([]);
    const inputRef = useRef<HTMLInputElement | null>(null); // create a reference to the input element

    const dispatch = useDispatch();

    const handleToggle = () => {
        setMenuActive(!menuActive);
        dispatch(setNavVisible(!navVisible));
    };

    const { navVisible, searchBar, hamBurgerClicked, crossClicked } =
        useSelector((state: RootState) => state.events);

    const handleHamBurgerClick = () => {
        dispatch(setHamBurgerClicked(true));
        dispatch(setCrossClicked(false));
        dispatch(setNavVisible(true));
    };

    const handleNavVisible = () => {
        if (hamBurgerClicked) {
            setCrossClicked(false);
            dispatch(setNavVisible(true));
        }
        if (crossClicked) {
            dispatch(setHamBurgerClicked(false));
            dispatch(setNavVisible(false));
        }
    };

    useEffect(() => {
        handleNavVisible();
    }, []);

    const handleSearchBar = () => {
        dispatch(setSearchBar(!searchBar));
        if (inputRef.current) {
            // focus the input element when the search bar is opened
            inputRef.current.focus();
        }
    };

    return (
        // TODO: correct this if needed and check the html elements stack of the app as this is the biggest div of dom
        // big-div or top-level-div
        <div
            className={`big-div ${
                hamBurgerClicked && navVisible ? "blur" : ""
            }`}
        >
            {/* HIDDEN SEARCH BAR STARTS HERE */}
            <SearchBar inputRef={inputRef} />
            <SideBar />
            {/* HIDDEN SEARCH BAR ENDS HERE */}
            {/* actual navbar */}
            <nav className="navbar">
                <div className="open-side-bar" onClick={handleHamBurgerClick}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="navbar-brand">
                    <Link className="logo-name" to="/">
                        WELL PLUS GOOD
                    </Link>
                </div>
                <button
                    className={`navbar-toggle ${menuActive ? "active" : ""}`}
                    onClick={handleToggle}
                >
                    {menuActive ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </button>
                <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/skin-care-tips">SKIN-CARE TIPS</Link>
                    </li>
                    <li>
                        <Link to="/food-and-nutrition">FOOD AND NUTRITION</Link>
                    </li>
                    <li>
                        <Link to="/holistic-treatment">HOLISTIC TREATMENT</Link>
                    </li>
                    <li>
                        <Link to="/fitness-tips">FITNESS TIPS</Link>
                    </li>
                    <li>
                        <Link to="/relationship-tips">RELATIONSHIP TIPS</Link>
                    </li>
                    <li>
                        <Link to="/entertainment">ENTERTAINMENT</Link>
                    </li>
                </ul>

                <button
                    className={`navbar-close ${menuActive ? "active" : ""}`}
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <i
                    onClick={handleSearchBar}
                    className={`search-icon ${
                        searchBar
                            ? "fa-solid fa-xmark"
                            : "fa-solid fa-magnifying-glass"
                    }`}
                ></i>
                {/* <div>
                    {searchResults.map((post: any) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <img src={post.cover_image} alt="" />
                        </div>
                    ))}
                </div> */}
            </nav>
        </div>
    );
};

export default Navbar;
