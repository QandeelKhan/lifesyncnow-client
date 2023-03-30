import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
// import SideBarToggle from "./SideBarToggle";
import "../components/css/side-bar-toggle.css";
import { SidebarData } from "./sideBarData";
import { setNavVisible, setSearchResults } from "../redux/reducers/eventsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [hamBurgerClicked, setHamburgerClicked] = useState(false);
    const [crossClicked, setCrossClicked] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    // const [searchResults, setSearchResults] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState<any>([]);

    const dispatch = useDispatch();

    const handleToggle = () => {
        setMenuActive(!menuActive);
        dispatch(setNavVisible(!navVisible));
    };

    const { navVisible, clientPortalClicked, searchResults } = useSelector(
        (state: RootState) => state.events
    );

    const handleHamBurgerClick = () => {
        setHamburgerClicked(true);
        setCrossClicked(false);
        dispatch(setNavVisible(true));
    };

    const handleCrossClick = () => {
        setHamburgerClicked(false);
        setCrossClicked(true);
        dispatch(setNavVisible(false));
        // setToggleBar(!toggleBar);
    };

    const handleNavVisible = () => {
        if (hamBurgerClicked) {
            setCrossClicked(false);
            dispatch(setNavVisible(true));
        }
        if (crossClicked) {
            setHamburgerClicked(false);
            dispatch(setNavVisible(false));
        }
    };

    useEffect(() => {
        handleNavVisible();
    }, []);

    const navigate = useNavigate();

    const handleSearchBar = () => {
        setSearchBar(!searchBar);
    };

    const fetchBlogPosts = async (searchQuery: any) => {
        const response = await fetch(
            `http://localhost:8000/api/blog/posts-list?search=${searchQuery}`
        );
        const data = await response.json();
        // setBlogPosts(data);
        dispatch(setSearchResults(data));
    };

    const handleSearch = () => {
        fetchBlogPosts(searchQuery);
        navigate("/search");
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
            <div
                className={`hidden-search-main-container ${
                    searchBar ? "active" : ""
                }`}
            >
                <div className="search-area">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Search Here..."
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    {/* <button onClick={handleSearch}>Search</button> */}
                </div>
                <div></div>
            </div>
            {/* HIDDEN SEARCH BAR ENDS HERE */}
            <div
                className={
                    navVisible
                        ? "side-bar-main-container active"
                        : "side-bar-main-container"
                }
            >
                <div className="toggle-close-icon" onClick={handleCrossClick}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="side-bar-menu">
                    <ul>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="side-bar-menu">
                    <ul>
                        <li>
                            <a href="/">WELL+GOOD PODCAST</a>
                        </li>
                        <li>
                            <a href="/">WELL+GOOD TALKS</a>
                        </li>
                        <li>
                            <a href="/">WELL+GOOD STUDIO SESSIONS</a>
                        </li>
                        <li>
                            <a href="/">WELL+GOOD RETREATS</a>
                        </li>
                        <li>
                            <a href="/">WELL+GOOD COOKBOOK</a>
                        </li>
                    </ul>
                </div>
                <div className="side-bar-footer">
                    <span>Become an Insider</span>
                    <div className="email-box">
                        {/* <label>Enter Email Address</label> */}
                        <input
                            type="text"
                            id="first_name"
                            placeholder="Enter Email Address"
                            required
                        />
                    </div>
                    <a href="/">SIGN UP</a>
                </div>
                <div className="side-bar-icons">
                    <a href="/">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
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
                        <Link to="/entertairment">ENTERTAIRMENT</Link>
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
                    className={
                        searchBar
                            ? "fa-solid fa-xmark"
                            : "fa-solid fa-magnifying-glass"
                    }
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
