import { Link } from "react-router-dom";
import bookingImg from "../image/booking-img.png";
function Action() {
  return (
    <div className="action bg__grey-3">
      <div className="action__text">
        <div className="heading">
          <h3 className="heading--h3">BOOKING</h3>
          <h2 className="heading--h2">Start booking now</h2>
        </div>
        <p className="p__reg--normal">
          Join our baking classes and enjoy 10% discount as our way to thank you
          and to celebrate our studio&apos;s 12-year anniversary.
        </p>
        <div className="action__cta">
          <form className="action__form">
            <input
              type="email"
              className="action__input"
              placeholder="Your Email Address"
            />
            <div className="action__btn click__basic">
              <Link className="action__btn--link">
                <p className="p__reg--normal color__white">Get Started</p>
              </Link>
            </div>
          </form>
        </div>
        <p className="p__reg--normal">
          By signing up, you agree to our terms and conditions.
        </p>
      </div>
      <div className="action__image">
        <img src={bookingImg} alt="" />
      </div>
    </div>
  );
}

export default Action;
