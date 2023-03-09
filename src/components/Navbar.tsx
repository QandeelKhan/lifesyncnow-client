import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./css/navbar.css";
import { Link } from "react-router-dom";
// import SideBarToggle from "./SideBarToggle";
import "../components/css/side-bar-toggle.css";
import { SidebarData } from "./sideBarData";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [toggleBar, setToggleBar] = useState(false);

    const handleToggle = () => {
        setMenuActive(!menuActive);
    };

    const handleToggleBar = () => {
        setToggleBar(!toggleBar);
    };

    return (
        <>
            <div
                className={
                    toggleBar
                        ? "side-bar-main-container active"
                        : "side-bar-main-container"
                }
            >
                <div className="toggle-close-icon" onClick={handleToggleBar}>
                    close
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
                            <a href="/">WELL+GOOD PODCAST</a>
                        </li>
                        <li>
                            <a href="/">WELL+GOOD PODCAST</a>
                        </li>
                        <li>
                            <a href="/">WELL+GOOD PODCAST</a>
                        </li>
                        <li>
                            <a href="/">WELL+GOOD PODCAST</a>
                        </li>
                    </ul>
                </div>
                <div className="side-bar-footer">
                    <span>Become an Insider</span>
                    <div className="email-box">
                        <label>Enter Email Address</label>
                        <input type="text" id="first_name" name="first_name" />
                    </div>
                    <a href="/">SIGN UP</a>
                </div>
            </div>
            {/* actual navbar */}
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="open-side-bar" onClick={handleToggleBar}>
                        open
                    </div>
                    <Link to="/">YOUR LOGO HERE</Link>
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
                        <Link to="holistic-treatment">HOLISTIC TREATMENT</Link>
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
            </nav>
        </>
    );
};

export default Navbar;
