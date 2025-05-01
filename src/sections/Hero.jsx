import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <motion.p className="hello-text">HELLO!</motion.p>
        <motion.h1 className="hero-name">
          I’m <span>Manpriya Dhanju</span>
        </motion.h1>
        <motion.h3 className="hero-typing">
          <span className="typewriter">
  <Typical
    loop={Infinity}
    wrapper="span"
    steps={["Learner", 2500, "Engineer", 2500, "Developer", 2500]}
  />
</span>

        </motion.h3>
        <p className="hero-role">A Full-Stack Developer</p>

        <div className="hero-buttons">
          {/* <a href="https://leetcode.com" target="_blank">LEETCODE</a> */}
          <a href="https://github.com/Manpriya1" target="_blank">GITHUB</a>
        </div>
      </div>

      <div className="hero-image-container">
      <img src={`${import.meta.env.BASE_URL}myimage1.jpg`} alt="Project" className="hero-img" />

      </div>
    </section>
  );
};

export default Hero;
