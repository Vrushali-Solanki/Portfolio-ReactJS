import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Intro from "./intro";
import Footer from "../Footer/footer";
import Projects from "../Projects/projects";
import Skills from "../Skills/skills";

function Home() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Intro theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default Home;
