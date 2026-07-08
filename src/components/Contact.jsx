import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact container" id="contact">
      <div className="contact-box glass">
        <h2 className="text-gradient">Let's Connect</h2>
        <p>Currently open for new opportunities in Machine Learning and Data Science.</p>
        <div className="contact-links">
          <a href="mailto:khaingzarmon.tech@gmail.com" className="btn btn-primary">Say Hello</a>
          <a href="https://linkedin.com/in/khaing-zar-mon" target="_blank" rel="noreferrer" className="btn btn-secondary glass">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Khaing Zar Mon. Built with React & Vite.</p>
      </div>
    </footer>
  );
};

export default Contact;
