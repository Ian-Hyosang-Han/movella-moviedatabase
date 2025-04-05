import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";

const Nav = ({ navOpen, setNavOpen }) => {
    // Function to close the mobile navigation menu
    function closeNav(e) {
        setNavOpen(false);
    }

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

    return (
        // Main navigation container with responsive classes
        <nav
            className={`main-nav ${navOpen || isWideScreen ? "show" : "hide"}`}
            onClick={closeNav}
        >
            <ul className={navOpen || isWideScreen ? "show" : "hide"}>
                {/* Navigation links section */}
                <div className="border-left">
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </div>
                <div className="border-left">
                    <li>
                        <NavLink to="/favorites">Faves</NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Nav;