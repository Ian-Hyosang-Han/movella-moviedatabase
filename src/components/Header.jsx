import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { ImBook } from "react-icons/im";
import { PiBookOpenText } from "react-icons/pi";
import SearchMovies from "./SearchMovies";

const Header = () => {

    // State to control mobile navigation menu visibility
    const [navOpen, setNavOpen] = useState(false);

    return (
        // Main header container with border
        <div className="border">
            <header className={navOpen ? "show" : ""}>
                <div className="mobile-menu">
                        <Link to="/">
                            <span className="mobile-logo">M</span>
                            <span className="desktop-logo" >
                                MOVELLA
                            </span>
                        </Link>
                    {/* Hamburger menu button for mobile */}
                    <SearchMovies />
                    <button
                        className="btn-main-nav"
                        onClick={() => {
                            setNavOpen(!navOpen);
                        }}
                    >
                        {/* Icon container */}
                        <span className="hamburger-icon">
                            {/* Conditional rendering of menu icons based on nav state */}
                            {navOpen ? (
                                // Opnebook icon when menu is open
                                <div className="menu-icon">
                                    <PiBookOpenText size={35} />
                                </div>
                            ) : (
                                // Book icon when menu is closed
                                <div className="close-icon">
                                    <ImBook size={35} />
                                </div>
                            )}
                        </span>
                        {/* Screen reader only text (currently commented out) */}
                    </button>
                </div>
                {/* Navigation component with props for controlling mobile menu state */}
                <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
            </header>
        </div>
    );
}

export default Header;