import React from 'react';
import styles from './ExperienceStyles.module.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Front-End Engineer',
      company: 'Golf 918 Systems',
      link: 'https://google.com',
      responsibilities: [
        'Developed web applications using React and Node.js.',
        'Collaborated with cross-functional teams.',
        'Implemented automated testing and CI/CD pipelines.'
      ]
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <a 
            key={index} 
            href={exp.link} 
            className={styles.experienceCard} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <ul className={styles.responsibilities}>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;