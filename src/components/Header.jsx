import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

import { ImBook } from "react-icons/im";
import { PiBookOpenText } from "react-icons/pi";

const Header = () => {

    // State to control mobile navigation menu visibility
    const [navOpen, setNavOpen] = useState(false);

    return (
        // Main header container with border
        <div className="border">
            {/* Header element with dynamic class based on nav state */}
            <header className={navOpen ? "show" : ""}>
                {/* Mobile menu container */}
                <div className="mobile-menu">
                    {/* Logo section */}
                    <p className="logo">
                        <Link to="/">
                            {/* Mobile version of logo */}
                            <span className="mobile-logo">M</span>
                            {/* Desktop version of logo with sound effect */}
                            <span className="desktop-logo" >
                                MOVELLA
                            </span>
                        </Link>
                    </p>
                    {/* Hamburger menu button for mobile */}
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
                                // X icon when menu is open
                                <div className="menu-icon">
                                    <PiBookOpenText size={45} />
                                </div>
                            ) : (
                                // Hamburger icon when menu is closed
                                <div className="close-icon">
                                    <ImBook size={45} />
                                </div>
                            )}
                        </span>
                        {/* Screen reader only text (currently commented out) */}
                        {/* <span className="sr-only">Menu</span> */}
                    </button>
                </div>
                {/* Navigation component with props for controlling mobile menu state */}
                <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
            </header>
        </div>
    );
}

export default Header;