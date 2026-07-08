import React from 'react';
import './Education.css';

const Education = () => {
  const educations = [
    {
      degree: "Master of Engineering in Artificial Intelligence & Internet of Things",
      university: "Sirindhorn International Institute of Technology (SIIT), Thammasat University, Thailand",
      period: "2022 - 2024",
      GPA: "3.88 / 4.0",
      description: "Focused on deep learning, speech processing, and natural language processing. Thesis: [Spoof detection using voice contribution on LFCC features and ResNet-34].",
    },
    {
      degree: "Bachelor of Engineering in Information Science & Technology",
      university: "University of Technology (Yatanarpon Cyber City), Myanmar",
      period: "2012 - 2018",
      GPA: "4.99 / 5.0",
      description: "Core coursework included Data Structures, Algorithms, Machine Learning.",
    }
  ];

  return (
    <section className="education container" id="education">
      <h2 className="section-title text-gradient">Education</h2>
      <div className="edu-grid">
        {educations.map((edu, index) => (
          <div className="edu-card glass" key={index}>
            <div className="edu-header">
              <div className="edu-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <div>
                <h3>{edu.degree}</h3>
                <span className="university">{edu.university}</span>
              </div>
            </div>
            <div className="edu-meta">
              <span className="period">{edu.period}</span>
              {edu.GPA && <span className="gpa">GPA: {edu.GPA}</span>}
            </div>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
