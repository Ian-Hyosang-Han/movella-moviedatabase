import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { PiBookOpenText } from "react-icons/pi";
import SearchMovies from "./SearchMovies";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeNav = () => {
        setNavOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`site-header-shell ${isScrolled ? "scrolled" : ""}`}>
            <header className={`site-header ${navOpen ? "show" : ""}`}>
                <div className="site-brand">
                    <Link className="site-logo" to="/" onClick={closeNav}>
                        MOVELLA
                    </Link>
                    <p className="site-subtitle">Where every movie feels like a novella</p>
                </div>

                <nav
                    className={`main-nav ${navOpen || isWideScreen ? "show" : "hide"}`}
                    onClick={closeNav}
                >
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favourites">Faves</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <SearchMovies />

                    <button
                        className="btn-main-nav"
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        {navOpen ? <PiBookOpenText size={30} /> : <ImBook size={30} />}
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;