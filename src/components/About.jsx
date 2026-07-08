import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about container" id="about">
      <h2 className="section-title text-gradient">Technical Skills</h2>
      
      <div className="skills-grid">
        <div className="skill-category glass">
          <h3>Programming & Databases</h3>
          <div className="skill-tags">
            <span>Python</span>
            <span>SQL</span>
            <span>Java</span>
            <span>Bash/Shell</span>
            <span>Perl</span>
          </div>
        </div>
        
        <div className="skill-category glass">
          <h3>Machine Learning & AI</h3>
          <div className="skill-tags">
            <span>Supervised/Unsupervised Learning</span>
            <span>Classification</span>
            <span>Anomaly Detection</span>
            <span>Predictive Modeling</span>
            <span>Time-Series & Demand Forecasting</span>
            <span>Customer Behavior Analysis</span>
            <span>Random Forest</span>
            <span>XGBoost</span>
            <span>LightGBM</span>
          </div>
        </div>
        
        <div className="skill-category glass">
          <h3>Deep Learning & GenAI</h3>
          <div className="skill-tags">
            <span>PyTorch</span>
            <span>TensorFlow</span>
            <span>Keras</span>
            <span>LLMs & RAG</span>
            <span>Agentic AI Systems</span>
            <span>NLP</span>
            <span>Speech Processing (ASR)</span>
            <span>RNN / LSTM / GRU</span>
          </div>
        </div>
        
        <div className="skill-category glass">
          <h3>MLOps & Deployment</h3>
          <div className="skill-tags">
            <span>MLflow</span>
            <span>Docker</span>
            <span>FastAPI</span>
            <span>REST APIs</span>
            <span>n8n Automation</span>
            <span>Git & CI/CD</span>
          </div>
        </div>

        <div className="skill-category glass">
          <h3>Data Analysis & Vis</h3>
          <div className="skill-tags">
            <span>EDA & Feature Engineering</span>
            <span>Statistical Analysis</span>
            <span>Tableau</span>
            <span>Apache Superset</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
