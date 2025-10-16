import "../styles/Articles.scss";
import moneyImg from "../assets/image-currency.jpg";
import dinnerImg from "../assets/image-restaurant.jpg";
import planeImg from "../assets/image-plane.jpg";
import conffetiImg from "../assets/image-confetti.jpg";

const Articles = () => {
  return (
    <section className="articles">
      <p className="articles_heading">Latest Articles</p>

      <div className="articles_container">
        <div className="card">
          <div className="card_image">
            <img src={moneyImg} alt="currency image" loading="lazy" />
          </div>
          <p className="image_description">By Claire Robinson</p>

          <div className="card_content">
            <h3 className="card_title">
              Receive money in any currency with no fees
            </h3>
            <p className="card_text">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card_image">
            <img src={dinnerImg} alt="dinner" loading="lazy" />
          </div>
          <p className="image_description">By Wilson Hutton</p>

          <div className="card_content">
            <h3 className="card_title">
              Treat yourself without worrying about money
            </h3>
            <p className="card_text">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card_image">
            <img src={planeImg} alt="airplane" loading="lazy" />
          </div>
          <p className="image_description">By Wilson Hutton</p>

          <div className="card_content">
            <h3 className="card_title">
              Take your Digitalbank card wherever you go
            </h3>
            <p className="card_text">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card_image">
            <img src={conffetiImg} alt="conffeti" loading="lazy" />
          </div>
          <p className="image_description">By Claire Robinson</p>

          <div className="card_content">
            <h3 className="card_title">
              Our invite-only Beta accounts are now live!
            </h3>
            <p className="card_text">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
