import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Movie App",
    // tech:[ "MongoDB", "Express", " React", "Node.js"],
    desc: "Full-stack Movie Booking web-app using the MERN (MongoDB, Express, React, Node.js) stack.",
    image: `${import.meta.env.BASE_URL}movies.png`,
  },
  {
    title: "Travelling Website",
    // tech: "React, Node.js, MongoDB",
    desc: "A worthwhile and responsive web application designed using HTML and CSS. PHP and MySQL are used as backend language and database respectively.",
    image: `${import.meta.env.BASE_URL}bg1.jpg`,
  },
  {
    title: "Life Tracking App",
    // tech: "React, Node.js, MongoDB",
    desc: "Life Tracking Web Application Monitors Health and Wealth. The main aim of the app is to make lifestyle healthier by tracking Calorie intake, Water intake, Sleep Analysis, and Workout patterns..",
    image: `${import.meta.env.BASE_URL}Tracking1.png`,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="neon-header">
        <span></span> Projects
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p className="tech-stack">{project.tech}</p>
            <p className="description">{project.desc}</p>
            {/* <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={project.code} target="_blank" rel="noreferrer">GitHub</a>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
