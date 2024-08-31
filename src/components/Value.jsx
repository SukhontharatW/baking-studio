import { PiChefHatThin } from "react-icons/pi";
import { PiShootingStarThin } from "react-icons/pi";
import { PiFlaskThin } from "react-icons/pi";
import { PiListHeartThin } from "react-icons/pi";
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
            <PiChefHatThin className="value__box--svg" />
          </div>
          <p className="p__lg--strong">Expert Instructors</p>
          <p className="p__reg--light">
            Lbore et dolore magna aliqua. Id eu nisl nunc mi ipsum.
          </p>
        </div>
        <div className="value__box--item">
          <div className="value__box--icon">
            <PiShootingStarThin className="value__box--svg" />
          </div>
          <p className="p__lg--strong">Delicious Recipes</p>
          <p className="p__reg--light">
            Lbore et dolore magna aliqua. Id eu nisl nunc mi ipsum.
          </p>
        </div>
        <div className="value__box--item">
          <div className="value__box--icon">
            <PiFlaskThin className="value__box--svg" />
          </div>
          <p className="p__lg--strong">Science Based</p>
          <p className="p__reg--light">
            Lbore et dolore magna aliqua. Id eu nisl nunc mi ipsum.
          </p>
        </div>
        <div className="value__box--item">
          <div className="value__box--icon">
            <PiListHeartThin className="value__box--svg" />
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
