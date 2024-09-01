import { Link } from "react-router-dom";
import class1 from "../image/class1.png";
import class2 from "../image/class2.png";
import class3 from "../image/class3.png";
function Class() {
  return (
    <div className="class">
      <div className="heading">
        <h3 className="heading--h3">SERVICE</h3>
        <h2 className="heading--h2">Our Popular Classes</h2>
      </div>
      <div className="class__box">
        <div className="class__item">
          <div className="class__item--image">
            <img src={class1} alt="" />
          </div>
          <p className="p__reg--strong">CAKE & SWEETS</p>
          <div className="class__item--first">
            <p className="p__sm--normal">⏳ 6 hours</p>
            <p className="p__sm--normal">🗓️ Every Sunday</p>
          </div>
          <div className="class__item--last">
            <p className="p__sm--normal">🔥 15% off</p>

            <p className="p__sm--normal class__item--btn click__basic shadow-2">
              <Link className="class__item--btn--link">SEE DETAIL</Link>
            </p>
          </div>
        </div>
        <div className="class__item">
          <div className="class__item--image">
            <img src={class2} alt="" />
          </div>
          <p className="p__reg--strong">CROISSANT & BREAD</p>
          <div className="class__item--first">
            <p className="p__sm--normal">⏳ 12 hours</p>
            <p className="p__sm--normal">🗓️ Every Sat-Sun</p>
          </div>
          <div className="class__item--last">
            <p className="p__sm--normal">🔥 10% off</p>

            <p className="p__sm--normal class__item--btn click__basic shadow-2">
              <Link className="class__item--btn--link">SEE DETAIL</Link>
            </p>
          </div>
        </div>
        <div className="class__item">
          <div className="class__item--image">
            <img src={class3} alt="" />
          </div>
          <p className="p__reg--strong">THE MASTER PATISSERIE</p>
          <div className="class__item--first">
            <p className="p__sm--normal">⏳ 72 hours</p>
            <p className="p__sm--normal">🗓️ Every Sat-Sun</p>
          </div>
          <div className="class__item--last">
            <p className="p__sm--normal">🔥 15% off</p>

            <p className="p__sm--normal class__item--btn click__basic shadow-2">
              <Link className="class__item--btn--link">SEE DETAIL</Link>
            </p>
          </div>
        </div>
      </div>
      {/* <h3 className="heading--h3 class__cta">
        <Link className="class__cta--btn">See all</Link>
      </h3> */}
    </div>
  );
}

export default Class;
