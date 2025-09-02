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
        <div className="article">
          <img
            src={moneyImg}
            alt="currency image"
            loading="lazy"
            className="article_img"
          />
          <div className="text_container">
            <p className="author">By Claire Robinson</p>
            <p className="article_tittle">
              Receive money in any currency with no fees
            </p>
            <p className="article_content">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>

        <div className="article">
          <img
            src={dinnerImg}
            alt="currency image"
            loading="lazy"
            className="article_img"
          />
          <div className="text_container">
            <p className="author">By Wilson Hutton</p>
            <p className="article_tittle">
              Treat yourself without worrying about money
            </p>
            <p className="article_content">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>

        <div className="article">
          <img
            src={planeImg}
            alt="currency image"
            loading="lazy"
            className="article_img"
          />
          <div className="text_container">
            <p className="author">By Wilson Hutton</p>
            <p className="article_tittle">
              Take your Digitalbank card wherever you go
            </p>
            <p className="article_content">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>

        <div className="article last_article">
          <img
            src={conffetiImg}
            alt="currency image"
            loading="lazy"
            className="article_img"
          />
          <div className="text_container">
            <p className="author">By Claire Robinson</p>
            <p className="article_tittle">
              Our invite-only Beta accounts are now live!
            </p>
            <p className="article_content">
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
