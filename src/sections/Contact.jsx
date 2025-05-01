import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Let’s connect! Here are my contact details:</p>

      <div className="contact-grid">
        <div className="contact-box">
          <span>📍</span>
          <h4>Address</h4>
          <p>Montreal, Canada</p>
        </div>

        <div className="contact-box">
          <span>📞</span>
          <h4>Phone</h4>
          <p>+1 (514) 970-3533</p>
        </div>

        <div className="contact-box">
          <span>📧</span>
          <h4>Email</h4>
          <p>manpriyadhanju@gmail.com</p>
        </div>
        <div className="contact-box">
          <span>🔗</span>
          <h4>LinkedIn</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/manpriya-dhanju-604205222/"
              target="_blank"
              rel="noreferrer"
            >
              My Profile
            </a>
          </p>
        </div>

        <div className="contact-box">
          <span>🌐</span>
          <h4>Resume</h4>
          <p>
            <a href="/Manpriya_Dhanju_Resume1.pdf" download>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
