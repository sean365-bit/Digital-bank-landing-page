import { useState } from "react";
import "../styles/Header.scss";
import { HamburgerIcon, LogoDark, CloseIcon } from "../assets/svgImages";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <article className="header_container">
        <nav>
          <div className="logo">
            <LogoDark />
          </div>

          <div className="links page">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
          <div className="links">
            <button className="button">Request Invite</button>
          </div>

          <div className="hamburguer" onClick={toggleMenu}>
            <div className={`icon ${isMenuOpen ? "fade_out" : "fade_in"}`}>
              <HamburgerIcon />
            </div>
            <div className={`icon ${isMenuOpen ? "fade_in" : "fade_out"}`}>
              <CloseIcon />
            </div>
          </div>
        </nav>
      </article>

      {isMenuOpen && (
        <div className="menu_overlay">
          <div className="popup_menu">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
