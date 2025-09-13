import { useState } from "react";
import "../styles/Header.scss";
import { HamburgerIcon, LogoDark, CloseIcon } from "../assets/svgImages";
import mockups from "../../public/images/image-mockups.png";

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
            <div className={`icon ${isMenuOpen ? "fade-out" : "fade-in"}`}>
              <HamburgerIcon />
            </div>
            <div className={`icon ${isMenuOpen ? "fade-in" : "fade-out"}`}>
              <CloseIcon />
            </div>
          </div>
        </nav>
      </article>

      <div className="header_box">
        <article className="header_content">
          <img
            src={mockups}
            alt="mobile phones images"
            loading="lazy"
            className="mobile_phone"
            draggable="false"
          />
        </article>

        <article className="header_body">
          <p className="header_hero">
            Next generation <br />
            digital banking
          </p>

          <p className="header_prg">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <div className="button_containered">
            <button className="button">Request Invite</button>
          </div>
        </article>
      </div>

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
