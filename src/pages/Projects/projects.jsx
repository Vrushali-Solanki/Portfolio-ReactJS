import React from "react";
import "./projects.css";
import project1 from "../../assets/navbar.jpeg";
import project2 from "../../assets/spotify.png";
import project3 from "../../assets/TSF app.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ theme }) => {
  return (
    <section id="projects" className={theme}>
      <span className="projectsTitle">Projects</span>
      <div className="card-container">
        <div className="card">
          <img className="card-img" src={project1} alt="" />
          <h2 className="card-title">Portfolio App</h2>
          <div className="chip-container">
            <div className="chip">
              <FontAwesomeIcon icon={faStar} className="star-color" />
              Flutter
            </div>
          </div>
          <p className="card-desc">
            Created a personalized Portfolio app with Flutter to showcase my
            professional journey and projects, offering easy customization and
            social sharing for effective self-promotion.
          </p>
          <div>
            <a
              href="https://github.com/Vrushali-Solanki/Flutter_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-link"
            >
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
              Code
            </a>
            {/* <a
              href="https://instagram-clone-react-c7a8e.web.app"
              rel="noopener noreferrer"
              target="_blank"
              className="primary-link"
            >
              <FontAwesomeIcon icon={faCircle} className="live-color" />
              Live
            </a> */}
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={project2} alt="" />
          <h2 className="card-title">Spotify Clone</h2>
          <div className="chip-container">
            <div className="chip">
              <FontAwesomeIcon icon={faStar} className="star-color" />
              React JS
            </div>
            <div className="chip">
              <FontAwesomeIcon icon={faStar} className="star-color" />
              Spotify API
            </div>
            <div className="chip">
              <FontAwesomeIcon icon={faStar} className="star-color" />
              Node JS
            </div>
          </div>
          <p className="card-desc">
            Built a ReactJS Spotify clone using the spotify-web-api-node
            package. Users can log in with their Spotify accounts, search, and
            enjoy their favorite tunes hassle-free.
          </p>
          <div>
            <a
              href="https://github.com/Vrushali-Solanki/Spotify-Clone"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-link"
            >
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
              Code
            </a>
            {/* <a
              href="https://instagram-clone-react-c7a8e.web.app"
              rel="noopener noreferrer"
              target="_blank"
              className="primary-link"
            >
              <FontAwesomeIcon icon={faCircle} className="live-color" />
              Live
            </a> */}
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={project3} alt="" />
          <h2 className="card-title">Multi-Platform Login App</h2>
          <div className="chip-container">
            <div className="chip">
              <FontAwesomeIcon icon={faStar} className="star-color" />
              Java
            </div>
            <div className="chip">
              <FontAwesomeIcon icon={faStar} className="star-color" />
              XML
            </div>
            <div className="chip">
              <FontAwesomeIcon icon={faStar} className="star-color" />
              Firebase
            </div>
          </div>
          <p className="card-desc">
            Developed an app that allows users to sign up using various
            social media accounts, such as Facebook, Twitter, or Google. Once
            signed up, users can conveniently view their account
            details within the app.
          </p>
          <div>
            <a
              href="https://github.com/Vrushali-Solanki/TSF-Social-Media-Integration"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-link"
            >
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
              Code
            </a>
            {/* <a
              href="https://instagram-clone-react-c7a8e.web.app"
              rel="noopener noreferrer"
              target="_blank"
              className="primary-link"
            >
              <FontAwesomeIcon icon={faCircle} className="live-color" />
              Live
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
