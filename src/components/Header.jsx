import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { PiBookOpenText } from "react-icons/pi";
import SearchMovies from "./SearchMovies";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    // Responsive design: Track if screen is wider than 768px
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

    // Update isWideScreen state when window is resized
    const handleResize = () => {
        setIsWideScreen(window.innerWidth >= 768);
    };

    // Add and cleanup window resize event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Function to close the mobile navigation menu
    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <div className="border">
            <header className={navOpen ? "show" : ""}>
                <div className="left-nav">
                    <p>Where every movie</p>
                    <p>feels like a novella</p>
                </div>
                <div className="desktop-logo">
                    <Link to="/">MOVELLA</Link>
                </div>
                <div className="mobile-menu">
                    <Link to="/">
                        <span className="mobile-logo">M</span>
                    </Link>

                    <SearchMovies />

                    <button
                        className="btn-main-nav"
                        onClick={() => {
                            setNavOpen(!navOpen);
                        }}
                    >
                        <span className="hamburger-icon">
                            {navOpen ? (
                                <div className="menu-icon">
                                    <PiBookOpenText size={35} />
                                </div>
                            ) : (
                                <div className="close-icon">
                                    <ImBook size={35} />
                                </div>
                            )}
                        </span>
                    </button>
                </div>

                {/* Navigation section moved here */}
                <nav
                    className={`main-nav ${navOpen || isWideScreen ? "show" : "hide"}`}
                    onClick={closeNav}
                >
                    <ul className={navOpen || isWideScreen ? "show" : "hide"}>
                        <div className="border-left">
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                        </div>
                        <div className="border-left">
                            <li>
                                <NavLink to="/favourites">Faves</NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;