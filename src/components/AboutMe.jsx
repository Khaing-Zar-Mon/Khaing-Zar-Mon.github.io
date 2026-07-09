import React from 'react';
import profilePic from '../assets/profile.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me container" id="about-me">
      <h2 className="section-title text-gradient">About Me</h2>
      <div className="about-me-content glass">
        <div className="about-me-image">
          <img src={profilePic} alt="Khaing Zar Mon" />
        </div>
        <div className="about-me-text">
          <p>
            Hi, I'm Khaing Zar Mon (Khaing). I'm a Machine Learning Engineer with a Master's degree in Artificial Intelligence and Internet of Things. I'm driven by curiosity and enjoy exploring new ideas, connecting the dots to solve complex problems, and building AI solutions with real-world impact.
          </p>
          <p>
            When I'm not coding or experimenting with AI, you'll find me cooking, gardening, or enjoying the peace of nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
