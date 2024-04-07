import React from "react";
import "./Header.css";
import logoLight from "../../assets/logo-dark.png";
import logoDark from "../../assets/logo-light.png";
import toggleLight from "../../assets/dark.png";
import toggleDark from "../../assets/light.png";
import { Link } from "react-scroll";

const Header = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <nav className="navbar">
      <img
        src={theme === "light" ? logoLight : logoDark}
        alt=""
        className="logo"
      />
      <div className="navList">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="navListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="navListItem">Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="navListItem">Projects</Link>
        <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-50} duration={500} className="navListItem">Contact</Link>
      </div>
      <button
        onClick={() => {
          toggle_mode();
        }}
        className="darkModeBtn"
      >
        Turn On
        <img
          onClick={() => {
            toggle_mode();
          }}
          src={theme === "light" ? toggleLight : toggleDark}
          alt=""
          className="toggle-icon"
        />
      </button>
    </nav>
  );
};

export default Header;
