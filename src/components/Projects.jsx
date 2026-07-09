import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h2 className="section-title text-gradient">Turning ideas into impactful AI solutions, one project at a time.</h2>
      <p className="projects-subtitle">A showcase of projects that reflect my curiosity, growth, and passion for solving real-world problems with AI.</p>
      <div className="project-grid">
        <div className="project-card glass">
          <div className="project-header">
            <h3>Store-Item Demand Forecasting</h3>
            <a href="https://github.com/Khaing-Zar-Mon/demand-forecasting" target="_blank" rel="noreferrer" className="project-link">
              GitHub ↗
            </a>
          </div>
          <p className="project-desc">
            End-to-end demand forecasting model to predict retail sales using a recursive, sequential forecasting strategy to prevent data leakage and measure WMAPE/SMAPE.
          </p>
          <div className="project-tech">
            <span>LightGBM</span>
            <span>XGBoost</span>
            <span>Scikit-Learn</span>
            <span>Pandas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
