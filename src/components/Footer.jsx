import { Link } from "react-router-dom";
import Logo from "../image/logo-footer.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="container bg__orange">
      <div className="container__footer">
        <footer className="footer">
          <div className="footer__left">
            <div className="footer__logo click__basic">
              <Link
                onClick={(event) => event.preventDefault()}
                className="footer__logo--btn"
              >
                <img src={Logo} alt="logo white" />
              </Link>
            </div>
            <div className="footer__social">
              <Link
                className="click__basic"
                onClick={(event) => event.preventDefault()}
              >
                <FaInstagram className="footer__social--icon" />
              </Link>

              <Link
                className="click__basic"
                onClick={(event) => event.preventDefault()}
              >
                <FaFacebook className="footer__social--icon" />
              </Link>
              <Link
                className="click__basic"
                onClick={(event) => event.preventDefault()}
              >
                <FaXTwitter className="footer__social--icon" />
              </Link>
            </div>
            <p className="p__reg--special">
              Copyright © 2024 by Sukhontharat W.
              <br />
              All right reserved.
            </p>
          </div>

          <div className="footer__directories">
            <div className="footer__directories--item">
              <p className=" p__lg--special">Contact Us</p>
              <ul className="directories">
                <li className="click__basic">
                  <Link
                    className="directories__link "
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Phone</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link "
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Email</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Location</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Help Center</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__directories--item">
              <p className="p__lg--special">Our Company</p>
              <ul className="directories">
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">About Us</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">For Business</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Partners</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Careers</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__directories--item">
              <p className="p__lg--special">Quick Link</p>
              <ul className="directories">
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Service</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Help Desk</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Policy & Terms</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__sm--light">Cookies</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
