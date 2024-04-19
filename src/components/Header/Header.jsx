import React from "react";
import "./Header.css";
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
        src="https://media4.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=6c09b952nqz5oodhn8sr0c5ee43ap9ppfxiessl2ldeiypz3&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        alt=""
        className="logo"
      />

      <div className="navList">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navListItem"
        >
          Contact
        </Link>
      </div>
      <div className="toggle-button">
        <button
          onClick={() => {
            toggle_mode();
          }}
          className="darkModeBtn"
        >
          <span>Turn On</span>
          <img
            onClick={() => {
              toggle_mode();
            }}
            src={theme === "light" ? toggleLight : toggleDark}
            alt=""
            className="toggle-icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
