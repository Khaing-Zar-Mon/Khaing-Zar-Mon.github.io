import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "RV Connex Co., Ltd.",
      period: "Feb 2025 – Present",
      description: "Developed an end-to-end fraud detection platform leveraging supervised and unsupervised machine learning, Agentic AI, RAG, and LLMs to deliver explainable predictions, achieving precision and recall above 0.80, reducing manual analyst workload by 90%, automating ML workflows with n8n, building interactive Tableau and Apache Superset dashboards, and deploying scalable services using Docker, FastAPI, REST APIs, and MLflow.",
      techStack: ["Python", "Agentic AI", "LLMs", "RAG", "Scikit-learn", "NumPy", "SHAP", "LIME", "FastAPI", "Docker", "MLflow", "n8n", "PostgreSQL", "Tableau", "Apache Superset"]
    },
    {
      title: "Co-Research Assistant",
      company: "AINRG, NECTEC",
      period: "Aug 2024 – Feb 2025",
      description: "Developed and evaluated deep learning models using MFCC, LFCC, and CNN for speech processing in low-resource Thai applications, mentored undergraduate interns in Python and machine learning, and co-authored peer-reviewed research published at the IEEE iSAI-NLP conference.",
      techStack: ["Python", "Deep Learning", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "CNN", "MFCC", "LFCC"]
    },
    {
      title: "Teaching Assistant",
      company: "Thammasat University, Thailand",
      period: "Sep 2023 – Dec 2024",
      description: "Guided over 200 students in Data Structures, Algorithms, and OOP, improving class assignment completion rates. Simplified complex technical topics into easy-to-understand explanations, helping students perform better in assessments. Supported instructors by reviewing coding exercises and providing feedback that reduced repeated errors. Assisted in grading and course administration to maintain smooth semester operations.",
      techStack: ["Data Structures", "Algorithms", "Object-Oriented Programming (OOP)"]
    },
    {
      title: "Research Project Team Member",
      company: "AINRG, NECTEC",
      period: "Apr 2023 – Jul 2024",
      description: "Developed deep learning–based speech spoof detection models using ResNet-34, reducing the Equal Error Rate (EER) by 74.22% through architecture optimization and hyperparameter tuning. Processed over 260,000 speech samples using advanced acoustic feature engineering to build robust voice representations, and collaborated with international research teams to deliver technical reports and research outcomes.",
      techStack: ["Python", "Deep Learning", "ResNet-34", "Keras", "Scikit-learn", "Acoustic Feature Engineering", "LFCC", "Hyperparameter Tuning"]
    },
    {
      title: "Researcher",
      company: "Language Understanding Laboratory",
      period: "Aug 2019 – Aug 2022",
      description: "Designed end-to-end speech processing pipelines for low-resource languages by developing phoneme resources, curating speech datasets, and implementing ASR and speaker verification systems using Kaldi. Performed transcript validation, audio segmentation, and dataset curation to improve data quality and model performance.",
      techStack: ["Kaldi", "ASR", "Speaker Verification", "Audio Segmentation", "Shell Scripting"]
    },
    {
      title: "Volunteer Tutor",
      company: "University of Technology (Yatanarpon Cyber City), Myanmar",
      period: "Jun 2019 – Feb 2020",
      description: "Taught PHP, MySQL, and Laravel to over 130 university students, offering step-by-step coding guidance that improved their ability to implement modern web development methods. Created clear and easy-to-follow lesson materials that improved clarity and helped students complete simulated projects on time with top scores. Guided students in debugging code, improving problem-solving and coding confidence. Mentored students on teamwork, professional behavior, and communication skills to prepare them for real-world work environments.",
      techStack: ["PHP", "MySQL", "Laravel", "Web Development"]
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
              {exp.techStack && (
                <div className="exp-tech-stack">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="exp-tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
