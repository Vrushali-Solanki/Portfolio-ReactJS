import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-header">Contact me</div>
      <div className="contact-links">
        <a href="mailto:vrushali.solanki01@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/vrushali-solanki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/Vrushali-Solanki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/vrushhhh.__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
