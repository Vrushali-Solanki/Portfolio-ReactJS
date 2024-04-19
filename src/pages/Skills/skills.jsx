// Skills.js
import React from "react";
import "./skills.css";
import {skills} from "../../data/constants";

const Skills = ({ theme }) => {
  return (
    <section id="skills" className={theme}>
      <span className="skillsTitle">Tech Stack</span>
      <div className="skills-container">
        {skills.map((item) =>(
          <div className="skill">
            <h2 className="skill-title">
              {item.title}
            </h2>
            <div className="skill-list">
              {item.skills.map((skill) =>(
                <div className="skill-item">
                  <img src={skill.image} alt="" className="skill-img" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
