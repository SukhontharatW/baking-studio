import { Link } from "react-router-dom";
import review1 from "../image/ben.png";
import review2 from "../image/hannah.png";
import review3 from "../image/steve.png";
import { IoArrowForwardOutline } from "react-icons/io5";
function Testimonial() {
  return (
    <div className="testimonial">
      <div className="heading">
        <h3 className="heading--h3">SERVICE</h3>
        <h2 className="heading--h2">Our Popular Classes</h2>
      </div>
      <div className="testimonial__box">
        <div className="testimonial__item">
          <div className="testimonial__item--first">
            <div className="testimonial__item--image">
              <img src={review1} alt="" />
            </div>
            <p className="p__reg--italic">
              “Lorem ipsum dolor sit amet, consectetur aelit. Phasellus nec
              cursus ven enatis nulla.”
            </p>
          </div>
          <p className="p__reg--normal color__orange align--right">
            Ben Hadley
          </p>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__item--first">
            <div className="testimonial__item--image">
              <img src={review2} alt="" />
            </div>
            <p className="p__reg--italic">
              “Lorem ipsum dolor sit amet, consectetur aelit. Phasellus nec
              cursus ven enatis nulla.”
            </p>
          </div>
          <p className="p__reg--normal color__orange align--right">
            Hannah Smith
          </p>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__item--first">
            <div className="testimonial__item--image">
              <img src={review3} alt="" />
            </div>
            <p className="p__reg--italic">
              “Lorem ipsum dolor sit amet, consectetur aelit. Phasellus nec
              cursus ven enatis nulla.”
            </p>
          </div>
          <p className="p__reg--normal color__orange align--right">
            Steve Miller
          </p>
        </div>
      </div>
      <p className="p__reg--normal testimonial__btn click__basic">
        <Link className="testimonial__btn--link">
          Read all stories <IoArrowForwardOutline />
        </Link>
      </p>
    </div>
  );
}

export default Testimonial;
