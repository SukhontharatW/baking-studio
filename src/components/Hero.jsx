import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="heading--h1">Discover the Art of Baking with Us</h1>
        <h4 className="heading--h4">
          Join our baking classes and elevate your skills.
        </h4>
        <div className="hero__cta">
          <div className="hero__btn click__basic">
            <Link className="hero__btn--book shadow-2">Book a class</Link>
          </div>
          <div className="hero__btn click__basic">
            <Link className="hero__btn--learn shadow-2">Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
