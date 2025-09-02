import "../styles/Header.scss";
import { HamburgerIcon, LogoDark } from "../assets/svgImages";
import mockups from "../../public/images/image-mockups.png";

const Header = () => {
  return (
    <header>
      <article className="header_container">
        <nav>
          <div className="logo">
            <LogoDark />
          </div>

          <div className="links">here are the links</div>

          <div className="hamburguer">
            <HamburgerIcon />
          </div>
        </nav>
      </article>

      <article className="header_content">
        <img
          src={mockups}
          alt="mobile phones images"
          loading="lazy"
          className="mobile_phone"
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

        <button className="button">Request Invite</button>
      </article>
    </header>
  );
};

export default Header;
