import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about container" id="about">
      <h2 className="section-title text-gradient">Technical Skills</h2>
      
      <div className="skills-grid">
        <div className="skill-category glass">
          <h3 className="category-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
            <span>Programming & Databases</span>
          </h3>
          <div className="skill-tags">
            <span>Python</span>
            <span>SQL</span>
            <span>Java</span>
            <span>Bash/Shell</span>
            <span>Perl</span>
          </div>
        </div>
        
        <div className="skill-category glass">
          <h3 className="category-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
            <span>Machine Learning & AI</span>
          </h3>
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
          <h3 className="category-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            <span>Deep Learning & GenAI</span>
          </h3>
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
          <h3 className="category-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            <span>MLOps & Deployment</span>
          </h3>
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
          <h3 className="category-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
            <span>Data Analysis & Vis</span>
          </h3>
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
