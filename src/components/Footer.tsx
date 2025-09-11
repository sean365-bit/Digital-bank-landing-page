import "../styles/Footer.scss";
import { LogoLight } from "../assets/svgImages";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logos">
        <div className="footer_img">
          <LogoLight />
        </div>

        <div className="logo_container">
          <img
            src={facebook}
            alt="social media logo"
            loading="lazy"
            className="socialIcons"
          />

          <img
            src={youtube}
            alt="social media logo"
            loading="lazy"
            className="socialIcons"
          />

          <img
            src={twitter}
            alt="social media logo"
            loading="lazy"
            className="socialIcons"
          />

          <img
            src={pinterest}
            alt="social media logo"
            loading="lazy"
            className="socialIcons"
          />

          <img
            src={instagram}
            alt="social media logo"
            loading="lazy"
            className="socialIcons"
          />
        </div>
      </div>

      <div className="footer_options">
        <div className="options_one">
          <p>About Us</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>
        <div className="options_two">
          <p>Careers</p>
          <p>Support</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="button_container">
        <button className="request_btn">Request Invite</button>
        <p className="digital_bank">© Digitalbank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
