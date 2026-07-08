import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "RV Connex Co., Ltd.",
      period: "Feb 2025 – Present",
      description: "Developed an end-to-end fraud detection platform leveraging supervised and unsupervised machine learning, Agentic AI, RAG, and LLMs to deliver explainable predictions, achieving precision and recall above 0.80, reducing manual analyst workload by 90%, automating ML workflows with n8n, building interactive Tableau and Apache Superset dashboards, and deploying scalable services using Docker, FastAPI, REST APIs, and MLflow."
    },
    {
      title: "Co-Research Assistant",
      company: "AINRG, NECTEC",
      period: "Aug 2024 – Feb 2025",
      description: "Developed and evaluated deep learning models using MFCC, LFCC, and CNN for speech processing in low-resource Thai applications, mentored undergraduate interns in Python and machine learning, and co-authored peer-reviewed research published at the IEEE iSAI-NLP conference."
    },
    {
      title: "Research Project Team Member",
      company: "AINRG, NECTEC",
      period: "Apr 2023 – Jul 2024",
      description: "Developed deep learning–based speech spoof detection models using ResNet-34, reducing the Equal Error Rate (EER) by 74.22% through architecture optimization and hyperparameter tuning. Processed over 260,000 speech samples using advanced acoustic feature engineering to build robust voice representations, and collaborated with international research teams to deliver technical reports and research outcomes."
    },
    {
      title: "Researcher",
      company: "Language Understanding Laboratory",
      period: "Aug 2019 – Aug 2022",
      description: "Designed end-to-end speech processing pipelines for low-resource languages by developing phoneme resources, curating speech datasets, and implementing ASR and speaker verification systems using Kaldi. Performed transcript validation, audio segmentation, and dataset curation to improve data quality and model performance."
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
