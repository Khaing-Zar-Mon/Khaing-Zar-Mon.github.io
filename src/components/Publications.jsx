import React from 'react';
import './Publications.css';

const Publications = () => {
  const pubs = [
    {
      title: "ThaiSpoof: An extension to current methods and database catering advanced spoof detection",
      publisher: "IEEE",
      year: "2024",
      url: "https://ieeexplore.ieee.org/document/10799368"
    },
    {
      title: "Spoof Detection using Voice Contribution on LFCC features and ResNet-34",
      publisher: "IEEE iSAI-NLP",
      year: "2023",
      url: "https://ieeexplore.ieee.org/document/10354625"
    },
    {
      title: "Speaker Recognition by Combining Features for Myanmar Weather Forecast Domain",
      publisher: "IEEE iSAI-NLP",
      year: "2021",
      url: "https://ieeexplore.ieee.org/document/9678153"
    },
    {
      title: "Young Female Researchers in Speech Workshop (YFRSW)",
      publisher: "INTERSPEECH",
      year: "2021",
      url: "https://sites.google.com/view/yfrsw-2021/home"
    }
  ];

  return (
    <section className="publications container" id="publications">
      <h2 className="section-title text-gradient">Publications & Recognitions</h2>
      <div className="pub-grid">
        {pubs.map((pub, index) => (
          <a href={pub.url} target="_blank" rel="noreferrer" className="pub-card glass" key={index}>
            <div className="pub-content">
              <h3>{pub.title}</h3>
              <div className="pub-meta">
                <span className="publisher">{pub.publisher}</span>
                <span className="year">{pub.year}</span>
              </div>
            </div>
            <div className="pub-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Publications;
