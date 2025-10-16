import "../styles/Body.scss";
import onlineBanking from "../assets/icon-online.svg";
import budgetingIcon from "../assets/icon-budgeting.svg";
import onboardingIcon from "../assets/icon-onboarding.svg";
import apiIcon from "../assets/icon-api.svg";

const Body = () => {
  return (
    <section className="body">
      <div className="body_section">
        <div className="body_tittle">
          <p className="body_hero">
            Why choose <br className="line_break" />
            Digitalbank?
          </p>

          <p className="body_prg">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </p>
        </div>

        <div className="features_container">
          <div className="features">
            <img
              src={onlineBanking}
              alt="icon"
              loading="lazy"
              className="img_icon"
              draggable="false"
            />
            <div className="features_tittle">Online Banking</div>
            <div className="features_info">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </div>
          </div>

          <div className="features">
            <img
              src={budgetingIcon}
              alt="icon"
              loading="lazy"
              className="img_icon"
              draggable="false"
            />
            <div className="features_tittle">Simple Budgeting</div>
            <div className="features_info">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </div>
          </div>

          <div className="features">
            <img
              src={onboardingIcon}
              alt="icon"
              loading="lazy"
              className="img_icon"
              draggable="false"
            />
            <div className="features_tittle">Fast Onboarding</div>
            <div className="features_info">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </div>
          </div>

          <div className="features">
            <img
              src={apiIcon}
              alt="icon"
              loading="lazy"
              className="img_icon"
              draggable="false"
            />
            <div className="features_tittle">Open API</div>
            <div className="features_info">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
