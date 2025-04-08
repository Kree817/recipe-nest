import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Import user icon
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Adjust screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoginSignup = () => {
    // Navigate to Login/Signup page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Mobile Navbar */}
      {isMobile ? (
        <div className="navbar-mobile">
          <div className="nav-top">
            {/* Logo */}
            <div className="logo">
              <h2>RecipeNest</h2>
            </div>

            {/* Hamburger Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-row">
            <input type="text" placeholder="Find a recipe" />
            <button className="search-btn">🔍</button>
          </div>

          {/* Mobile Menu Links */}
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/chefs">Chefs</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li className="login-option" onClick={handleLoginSignup}>
                <FaUser className="user-icon" />
                <span>Login / Signup</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        /* Desktop Navbar */
        <div className="navbar-desktop">
          <div className="nav-container">
            {/* Logo */}
            <div className="logo">
              <h2>RecipeNest</h2>
            </div>

            {/* Desktop Navigation Links */}
            <div className="nav-links">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chefs">Chefs</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Search Bar */}
            <div className="search-row">
              <input type="text" placeholder="Find a recipe" />
              <button className="search-btn">🔍</button>
            </div>

            {/* Login/Signup */}
            <div className="login-option" onClick={handleLoginSignup}>
              <FaUser className="user-icon" />
              <span>Login / Signup</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
