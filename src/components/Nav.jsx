import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Nav = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <header>
                <nav>
                    <h1 className="logo-title" onClick={() => navigate("/")}>
                        Travello
                    </h1>
                    <div
                        className={`menu-toggle ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                    >
                        <div className="hamburger"></div>
                    </div>
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li onClick={() => navigate("/destinations")}>
                            Destinations
                        </li>
                        <li onClick={() => navigate("/guide")}>Travel guide</li>
                        <li onClick={() => navigate("/about")}>About us</li>
                        <li onClick={() => navigate("/login")}>Login</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Nav;
