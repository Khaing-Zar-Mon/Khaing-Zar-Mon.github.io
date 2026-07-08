import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container animate-fade-up">
      <div className="hero-content">
        <h2 className="greeting">Hello, I'm</h2>
        <h1 className="name text-gradient">Khaing Zar Mon</h1>
        <h3 className="title">Data Scientist & Machine Learning Engineer</h3>
        <p className="bio">
          Designing, training, and deploying AI-driven solutions across predictive modeling, 
          fraud detection, and NLP. Building scalable pipelines for real-world business impact.
        </p>
        <div className="hero-cta">
          <a href="https://github.com/Khaing-Zar-Mon" target="_blank" rel="noreferrer" className="btn btn-primary glass">View GitHub</a>
          <a href="https://linkedin.com/in/khaing-zar-mon" target="_blank" rel="noreferrer" className="btn btn-secondary glass">LinkedIn</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="glow-orb"></div>
        <div className="glass-card glass">
          <code>
            <span className="code-keyword">import</span> ml_models<br/>
            <span className="code-keyword">const</span> role = <span className="code-string">"ML Engineer"</span>;<br/>
            <span className="code-keyword">while</span> (true) &#123;<br/>
            &nbsp;&nbsp;optimize(impact);<br/>
            &#125;
          </code>
        </div>
      </div>
    </section>
  );
};

export default Hero;
