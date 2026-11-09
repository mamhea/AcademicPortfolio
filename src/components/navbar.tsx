
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./navbar.css";

const navigationItems = [
    { label: "首頁", path: "/", end: true },
    { label: "關於我", path: "/about" },
    { label: "教育背景", path: "/education" },
    { label: "研究歷程", path: "/research" },
    { label: "專案作品", path: "/projects" },
    { label: "學術成就", path: "/achievements" },
    { label: "面試資料", path: "/interview" },
    { label: "個人履歷", path: "/resume" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    Academic<span>Portfolio</span>
                    <span className="navbar-dot">.</span>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="navbar-links">
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar-link active"
                                    : "navbar-link"
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Navigation */}
            <nav
                className={`navbar-mobile ${isMenuOpen ? "open" : ""
                    }`}
            >
                {navigationItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.end}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive
                                ? "navbar-mobile-link active"
                                : "navbar-mobile-link"
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

export default Navbar;
