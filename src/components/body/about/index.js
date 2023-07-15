import React from "react";
import "./about.css";
import lanamckay from "../../../assets/icons/lana.png"
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
         <br /> <span className="info-name">Hello, nice to meet you 👋</span>.
         <br /> 
        <br /> 
    I'm a 3rd year Systems Design Engineering student at the University of Waterloo 💻
    <br />
    <br />
    I have gained valuable experience working in software development and product management through personal projects, hackathons, and work experiences.
    <br />
    <br />
    During my free time you can find me at the gym, travelling, eating good foods, or hanging out with my dog!
        </div>
        <div className="about-photo">
          <img 
            src={lanamckay}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
