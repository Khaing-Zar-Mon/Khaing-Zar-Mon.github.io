import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about container" id="skills">
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
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Java</span>
            <span>Bash</span>
            <span>Shell Scripting</span>
            <span>Perl</span>
          </div>
        </div>
        
        <div className="skill-category glass">
          <h3 className="category-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            <span>Libraries & Frameworks</span>
          </h3>
          <div className="skill-tags">
            <span>PyTorch</span>
            <span>TensorFlow</span>
            <span>Keras</span>
            <span>Scikit-learn</span>
            <span>OpenCV</span>
            <span>Rasterio</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>FastAPI</span>
          </div>
        </div>
        
        <div className="skill-category glass">
          <h3 className="category-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
            <span>AI & Machine Learning</span>
          </h3>
          <div className="skill-tags">
            <span>Large Language Models (LLMs)</span>
            <span>Retrieval-Augmented Generation (RAG)</span>
            <span>Agentic AI</span>
            <span>YOLO</span>
            <span>Predictive Modeling</span>
            <span>Time-Series Forecasting</span>
            <span>NLP</span>
            <span>Speech Processing (ASR)</span>
            <span>Classification</span>
            <span>Anomaly Detection</span>
            <span>Ensemble Learning</span>
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
            <span>Kafka</span>
            <span>REST APIs</span>
            <span>n8n Workflow Automation</span>
            <span>Git</span>
            <span>CI/CD Concepts</span>
          </div>
        </div>

        <div className="skill-category glass">
          <h3 className="category-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
            <span>Data Analysis & Visualization</span>
          </h3>
          <div className="skill-tags">
            <span>Exploratory Data Analysis (EDA)</span>
            <span>Feature Engineering</span>
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
