import { PiChefHat } from "react-icons/pi";
import { PiShootingStar } from "react-icons/pi";
import { PiFlask } from "react-icons/pi";
import { PiListHeart } from "react-icons/pi";
function Value() {
  return (
    <div className="value">
      <div className="heading">
        <h3 className="heading--h3">CORE VALUE</h3>
        <h2 className="heading--h2">What make us spacial</h2>
      </div>
      <div className="value__box">
        <div className="value__box--item">
          <div className="value__box--icon">
            <PiChefHat className="value__box--svg" />
          </div>
          <p className="p__lg--strong">Expert Instructors</p>
          <p className="p__reg--light">
            Lbore et dolore magna aliqua. Id eu nisl nunc mi ipsum.
          </p>
        </div>
        <div className="value__box--item">
          <div className="value__box--icon">
            <PiShootingStar className="value__box--svg" />
          </div>
          <p className="p__lg--strong">Delicious Recipes</p>
          <p className="p__reg--light">
            Lbore et dolore magna aliqua. Id eu nisl nunc mi ipsum.
          </p>
        </div>
        <div className="value__box--item">
          <div className="value__box--icon">
            <PiFlask className="value__box--svg" />
          </div>
          <p className="p__lg--strong">Science Based</p>
          <p className="p__reg--light">
            Lbore et dolore magna aliqua. Id eu nisl nunc mi ipsum.
          </p>
        </div>
        <div className="value__box--item">
          <div className="value__box--icon">
            <PiListHeart className="value__box--svg" />
          </div>
          <p className="p__lg--strong">Small Class Sizes</p>
          <p className="p__reg--light">
            Lbore et dolore magna aliqua. Id eu nisl nunc mi ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Value;
