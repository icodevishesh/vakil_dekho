import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="main">
            <nav className="header">
                <div className="nav-logo">
                    <span>Vakil Dekho</span>
                </div>
                <div className="webNavWrapper">
                    <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <Link to="/">Consult an Expert</Link>
                        <Link to="/">Tax & Compliance</Link>
                        <Link to="/">Trademark & IP</Link>
                        <Link to="/">Documentation</Link>
                        <Link to="/">About</Link>
                    </div>
                    <div className="nav-btn">
                        <button className="login-btn">Login</button>
                    </div>
                    <div className="nav-hamburger-menu" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </div>
                </div>
            </nav>
        </div>
    );
};