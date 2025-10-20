import mockups from "../../public/images/image-mockups.png";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="header_box">
        <article className="background_container">
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
    </div>
  );
};

export default Hero;
