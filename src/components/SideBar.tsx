import React from "react";
import NavSubscribeForm from "./forms/NavSubscribeForm";
import { SidebarData } from "./sideBarData";
import { useDispatch } from "react-redux";
import {
    setCrossClicked,
    setHamBurgerClicked,
    setNavVisible,
} from "../redux/reducers/eventsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../components/css/sidebar.css";

const SideBar = () => {
    const apiUrl = "http://localhost:8000/api/subscribe/";

    const { navVisible } = useSelector((state: RootState) => state.events);

    const dispatch = useDispatch();
    const handleCrossClick = () => {
        dispatch(setHamBurgerClicked(false));
        dispatch(setCrossClicked(true));
        dispatch(setNavVisible(false));
        // setToggleBar(!toggleBar);
    };

    return (
        <>
            {navVisible && (
                <div className="sidebar-overlay" onClick={handleCrossClick} />
            )}

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
                {/* TODO: REALLY BAD PRACTICE, DIRTY CODE */}
                <div className="side-bar-footer">
                    <span>Become an Insider</span>
                    <NavSubscribeForm apiUrl={apiUrl} />
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
        </>
    );
};

export default SideBar;
