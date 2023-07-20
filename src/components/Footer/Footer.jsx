import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="title">
        <h3>SAY HELLO</h3>
      </div>

      <div className="detail-links">
        <ul className="list1">
          <li>
            <a href="https://www.linkedin.com/in/tarunsharma070" target="blank">
              Linkdin
            </a>
          </li>
          <li>
            <a href="https://github.com/Tarun-web" target="blank">
              Github
            </a>
          </li>
        </ul>
        <ul className="list1">
          <li>
            <Link to="/projects">My Work</Link>
          </li>
          <li>
            <Link to="/projects">My Resume</Link>
          </li>
        </ul>
      </div>

      <hr />

      <div className="ending">
        <div className="copyright">
          <p>&#169; Tarun Sharma 2023</p>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href="">IG</a>
            </li>
            <li>
              <a href="">WA</a>
            </li>
            <li>
              <a href="">FB</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
