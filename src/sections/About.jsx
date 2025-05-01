import React from "react";
import "./About.css";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section className="about-section" id="about">
    <div className="neon-header">
      About Me
    </div>
      <div className="about-container">
        {/* LEFT: Image + Skills */}
        <div className="about-left">
          {/* <img
            src="/manpriya.jpg"
            alt="Manpriya Dhanju"
            className="about-img"
          /> */}

          <div className="skills">
            <div className="skill">
              <p>PHP</p>
              <div className="skill-bar">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>
            <div className="skill">
              <p>HTML5/CSS3</p>
              <div className="skill-bar">
                <span style={{ width: "90%" }}></span>
              </div>
            </div>
            <div className="skill">
              <p>JavaScript</p>
              <div className="skill-bar">
                <span style={{ width: "90%" }}></span>
              </div>
            </div>
            <div className="skill">
              <p>Python</p>
              <div className="skill-bar">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Info */}
        <motion.div className="about-right">
          <p className="about-summary">
            Full-Stack Software Developer with 4+ years of experience in the
            education technology (EdTech) industry, focused on Developing
            high-performance web interfaces and tools for modern business
            education. Proven track record of developing intuitive user
            interfaces, optimizing performance, and integrating APIs to deliver
            seamless digital experiences for educational platforms.Experience
            collaborating with cross-functional teams to design and implement
            product features aligned with business and user needs.
          </p>
          <ul className="about-info">
            <li>
              <strong>Profile:</strong> Software Development
            </li>
            <li>
              <strong>Domain:</strong> Engineering
            </li>
            <li>
              <strong>Education:</strong> <ul>Masters in Computer Application
              (2020–2022)</ul><ul>Bachelor's of Computer Science
              (2017–2020)</ul>
            </li>
            <li>
              <strong>Language:</strong> English, Hindi
            </li>
            <li>
              <strong>Frameworks:</strong> Angular, REST API,React.js
            </li>
            <li>
              <strong>Database:</strong> MySQL,MongoDB
            </li>
            <li>
              <strong>Tools:</strong> Github,GitLab,
              Postman,Figma,Netlify,Vercel,VSCode
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
