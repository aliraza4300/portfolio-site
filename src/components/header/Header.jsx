import React, { useState, useEffect } from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const [logoText, setLogoText] = useState("Hynek Cholasta");
    const [logoOpacity, setLogoOpacity] = useState(1);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [logoClass, setLogoClass] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80 && !hasScrolled) {
                setHasScrolled(true);
                header.classList.add("scroll-header");
                setLogoOpacity(0); // Start fade out
                setTimeout(() => {
                    setLogoText("CH"); // Change text
                    setLogoClass("scrolled-logo"); // Add class for scrolled logo
                    setLogoOpacity(1); // Fade in
                }, 300); // Match this to the transition duration
            } else if (window.scrollY < 80 && hasScrolled) {
                setHasScrolled(false);
                header.classList.remove("scroll-header");
                setLogoOpacity(0); // Start fade out
                setTimeout(() => {
                    setLogoText("Hynek Cholasta"); // Change text back
                    setLogoClass(""); // Remove scrolled class
                    setLogoOpacity(1); // Fade in
                }, 300); // Match this to the transition duration
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasScrolled]);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className={`nav__logo ${logoClass}`} style={{ opacity: logoOpacity }}>{logoText}</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon" />Home
                            </a>
                        </li>
                        <a className="navbar_slash">/</a>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")}
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon" />About
                            </a>
                        </li>
                        <a className="navbar_slash">/</a>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon" />Skills
                            </a>
                        </li>
                        <a className="navbar_slash">/</a>
                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveNav("#services")}
                                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineClipboardList className="nav__icon" />Services
                            </a>
                        </li>
                        <a className="navbar_slash">/</a>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon" />Projects
                            </a>
                        </li>
                        <a className="navbar_slash">/</a>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")}
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon" />Contact
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header;
