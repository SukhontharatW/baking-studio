import { Link } from "react-router-dom";
import Logo from "../image/logo-nav.svg";
import { IoClose, IoMenu } from "react-icons/io5";

function Nav() {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  const hiddenSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };
  return (
    <div className="container__fix bg__white shadow">
      <div className="container__nav">
        <nav className="nav">
          <ul className="navbar">
            <li className="navbar__item navbar__logo">
              <Link className="navbar__link">
                <img src={Logo} alt="" />
              </Link>
            </li>
            <li className="navbar__item hideOnMobile">
              <Link className="navbar__link">
                <p className="p__reg--normal">Home</p>
              </Link>
            </li>
            <li className="navbar__item hideOnMobile">
              <Link className="navbar__link">
                <p className="p__reg--normal">About us</p>
              </Link>
            </li>
            <li className="navbar__item hideOnMobile">
              <Link className="navbar__link">
                <p className="p__reg--normal">Classes</p>
              </Link>
            </li>
            <li className="navbar__item hideOnMobile">
              <Link className="navbar__link">
                <p className="p__reg--normal">Testimonial</p>
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                className="navbar__link navbar__btn--menu "
                onClick={showSidebar}
              >
                <IoMenu />
              </Link>
            </li>
            <li className="navbar__item hideOnMobile">
              <Link className="navbar__link">
                <p className="p__reg--normal color__white">Book a class</p>
              </Link>
            </li>
          </ul>
          <ul className="navbar sidebar">
            <li className="navbar__item" onClick={hiddenSideBar}>
              <Link className="navbar__link navbar__btn--close">
                <IoClose />
              </Link>
            </li>
            <li className="navbar__item" onClick={hiddenSideBar}>
              <Link className="navbar__link">
                <p className="p__reg--normal">Home</p>
              </Link>
            </li>
            <li className="navbar__item" onClick={hiddenSideBar}>
              <Link className="navbar__link">
                <p className="p__reg--normal">About us</p>
              </Link>
            </li>
            <li className="navbar__item" onClick={hiddenSideBar}>
              <Link className="navbar__link">
                <p className="p__reg--normal">Classes</p>
              </Link>
            </li>
            <li className="navbar__item" onClick={hiddenSideBar}>
              <Link className="navbar__link">
                <p className="p__reg--normal">Testimonial</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
