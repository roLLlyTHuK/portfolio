import "./style.css";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://github.com/roLLlyTHuK"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/andriy-dovhaniuk-775b21280"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 andriy.dovhaniuk</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
