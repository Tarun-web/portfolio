import { React, useRef } from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logo = "</>";

  //REFS
  const menu = useRef(null);
  const menuItem = useRef(null);
  const burger = useRef(null);
  const close = useRef(null);

  const showMenu = () => {
    menu.current.classList.add("active");
    burger.current.style.display = "none";
    close.current.style.display = "block";
  };
  const hideMenu = () => {
    menu.current.classList.remove("active");
    burger.current.style.display = "block";
    close.current.style.display = "none";
  };

  return (
    <nav>
      <div className="logo">{logo}</div>

      <div className="darkMode">
        <div className="dark">
          <DarkModeIcon />
        </div>
        <div className="light">
          <LightModeIcon />
        </div>
      </div>

      <div className="burger" ref={burger} onClick={showMenu}>
        <MenuIcon />
      </div>

      <div className="close" ref={close} onClick={hideMenu}>
        <CloseIcon />
      </div>

      <div ref={menu} className="menu">
        <ul className="menu1">
          <li className="menu-items" ref={menuItem}>
            <Link className="menu-link" to={"/projects"}>
              My Projects
            </Link>
          </li>
          <li className="menu-items" ref={menuItem}>
            <a className="menu-link" href="" download={true}>
              My Resume
            </a>
          </li>
          <li className="menu-items" ref={menuItem}>
            <Link className="menu-link" to={"/about"}>
              Wanna Know More?
            </Link>
          </li>
          <li className="menu-items" ref={menuItem}>
            <Link className="menu-link" to={"#contact"}>
              Wanna Say Hello?
            </Link>
          </li>
          <li className="menu-items" ref={menuItem}>
            <p>tarunsharma87289@gmail.com</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
