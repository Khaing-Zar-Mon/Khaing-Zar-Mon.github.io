import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about container" id="about">
      <h2 className="section-title text-gradient">Technical Skills</h2>
      
      <div className="skills-grid">
        <div className="skill-category glass">
          <h3>ML & AI</h3>
          <div className="skill-tags">
            <span>Supervised Learning</span>
            <span>Time-Series Forecasting</span>
            <span>XGBoost</span>
            <span>LightGBM</span>
            <span>Deep Learning (RNN/LSTM)</span>
          </div>
        </div>
        
        <div className="skill-category glass">
          <h3>GenAI & NLP</h3>
          <div className="skill-tags">
            <span>PyTorch</span>
            <span>TensorFlow</span>
            <span>LLMs</span>
            <span>RAG</span>
            <span>Agentic Systems</span>
            <span>Speech Processing</span>
          </div>
        </div>
        
        <div className="skill-category glass">
          <h3>MLOps & Data</h3>
          <div className="skill-tags">
            <span>Python</span>
            <span>SQL</span>
            <span>MLflow</span>
            <span>Docker</span>
            <span>FastAPI</span>
            <span>Tableau</span>
            <span>n8n</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
