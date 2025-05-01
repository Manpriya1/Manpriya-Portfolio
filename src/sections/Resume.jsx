import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="neon-header">
        <span></span> Experience
      </div>

      <div className="resume-container">
        {/* Experience Card 1 */}
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="exp-date">Jul 2021 – Mar 2024 </h3>
          <h2 className="exp-role">Full-Stack Developer </h2>
          <h4 className="exp-company">Masters'Union</h4>
          <p className="exp-desc">
            Developed and maintained responsive React.js components for the
            online learning portal, improving usability for 2,000+ active
            students. Built and integrated RESTful APIs for course management,
            user authentication, and class scheduling, ensuring secure and
            efficient data flow. Collaborated with product and design teams to
            convert Figma designs into responsive UI components, enhancing
            student and admin experience. Implemented MongoDB and MySQL for data
            persistence across different modules such as user profiles, course
            progress, and assessments.
          </p>
        </motion.div>

        {/* Experience Card 2 */}
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="exp-date">Jan 2021-Jun 2021</h3>
          <h2 className="exp-role">Full-Stack Developer Intern</h2>
          <h4 className="exp-company">
            Lovely Professional University(Masters'Union)
          </h4>
          <p className="exp-desc">
            Assisted in building web-based tools for student and admin portals
            using React.js (frontend) and Node.js (backend). Collaborated with
            the design team to implement responsive UI using HTML5, CSS3, and
            Figma layouts. Contributed to Agile sprint cycles with daily
            standups, code reviews, and Git-based version control.
          </p>
        </motion.div>
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="exp-date">May 2020 – Nov 2020</h3>
          <h2 className="exp-role">Front-end Developer Intern</h2>
          <h4 className="exp-company">Lido Learning</h4>
          <p className="exp-desc">
          Contributed to the development of Lido’s online tutoring platform, implementing key frontend features using 
React.js and modern JavaScript.	Integrated REST APIs to dynamically display courses, class schedules, student progress, and notifications.
Built reusable UI components and ensured responsiveness across desktop, tablet, and mobile devices.

          </p>
        </motion.div>
      </div>
      <div className="download-cv-wrapper">
  <a
    href="/Manpriya_Dhanju_Resume1.pdf"
    download
    className="download-cv-btn"
  >
    Download Resume
  </a>
</div>

    </section>
  );
};

export default Resume;
