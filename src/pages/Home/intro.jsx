import React from "react";
import "./intro.css";
import downloadLight from "../../assets/download-dark.png";
import downloadDark from "../../assets/download-light.png";
// import resume from "../../assets/Vrushali Solanki-Resume.pdf";

const Intro = ({ theme, setTheme }) => {
  const downloadResume = () => {
    // Replace 'your-resume-file-url.pdf' with the URL of your resume PDF file
    const resumeUrl =
      "https://drive.google.com/file/d/1KPwz4_NVlpSyVVYZaeH1G2cUBuTPwY4R/view?usp=sharing";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;

    // Set the target attribute to open the PDF file in a new tab
    link.setAttribute("target", "_blank");

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Clean up by removing the anchor element
    document.body.removeChild(link);
  };

  return (
    <section id="intro" className={theme}>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          <span className="I">I'm </span>
          <span className="introName">Vrushali Solanki</span> <br />
          <span className="introRole">Software Engineer</span>
        </span>
        <span className="introPara">
          I'm a skilled Android Developer with a background in Computer
          Engineering. With 6+ months of hands-on experience in the field, I'm
          currently employed at Rentokil PCI, dedicated to delivering
          exceptional mobile experiences. Proficient in Java, Kotlin, API
          integration, and JWT Authentication, I specialize in crafting
          high-quality apps that meet expectations. I am always eager to learn
          and keep up with the latest in technology. Explore my portfolio to see
          examples of my work, and let's discuss how I can help bring your app
          ideas to life.
        </span>
      </div>
      <button className="downloadBtn" onClick={downloadResume}>
        <img
          src={theme === "light" ? downloadLight : downloadDark}
          alt=""
          className="downloadBtnImg"
          onClick={downloadResume}
        />
        Download Resume
      </button>
    </section>
  );
};

export default Intro;
