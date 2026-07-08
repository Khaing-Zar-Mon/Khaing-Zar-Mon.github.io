import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "RV Connex Co., Ltd.",
      period: "Feb 2025 – Present",
      description: "Designed XGBoost and Random Forest models for risk mitigation. Developed an Agentic AI and RAG reasoning framework, reducing manual analyst workload by 90%."
    },
    {
      title: "Co-Research Assistant",
      company: "AINRG, NECTEC",
      period: "Aug 2024 – Feb 2025",
      description: "Trained and evaluated deep learning models (CNN, ResNet34) for speech processing in low-resource applications."
    },
    {
      title: "Research Project Team Member",
      company: "AINRG, NECTEC",
      period: "Apr 2023 – Jul 2024",
      description: "Developed spoof-detection models, achieving a 74.22% reduction in Equal Error Rate (EER) through architecture optimization."
    },
    {
      title: "Researcher",
      company: "Language Understanding Laboratory",
      period: "Aug 2019 – Aug 2022",
      description: "Validated transcripts and optimized acoustic/language models for automatic speech recognition (ASR)."
    }
  ];

  return (
    <section className="experience container" id="experience">
      <h2 className="section-title text-gradient">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item glass" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title} <span className="company">@ {exp.company}</span></h3>
              <span className="period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
