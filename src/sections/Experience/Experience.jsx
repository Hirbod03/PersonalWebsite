import React from 'react';
import styles from './ExperienceStyles.module.css';

const experiences = [
  // {
  //   title: 'Software Developer',
  //   company: 'Tech Corp',
  //   responsibilities: [
  //     'Developed and maintained web applications',
  //     'Collaborated with cross-functional teams',
  //     'Improved system performance by 20%',
  //   ],
  //   typeOfEmployment: 'Full-time',
  //   employmentDuration: 'Jan 2022 - Present',
  //   companyLink: 'https://www.techcorp.com',
  // },
  // {
  //   title: 'Intern',
  //   company: 'Startup Inc',
  //   responsibilities: [
  //     'Assisted in the development of a mobile app',
  //     'Conducted market research',
  //     'Participated in team meetings',
  //   ],
  //   typeOfEmployment: 'Internship',
  //   employmentDuration: 'Jun 2021 - Dec 2021',
  //   companyLink: 'https://www.startupinc.com',
  // },
  // { 
  //   title: 'Frontend Developer',
  //   company: 'Web Solutions',
  //   responsibilities: [
  //     'Developed user interfaces for web applications',
  //     'Implemented responsive designs',
  //     'Collaborated with designers to create visually appealing websites',
  //   ],
  //   typeOfEmployment: 'Full-time',
  //   employmentDuration: 'Mar 2020 - Dec 2021',
  //   companyLink: 'https://www.websolutions.com',
  // },
  // {
  //   title: 'Freelance Developer',
  //   company: 'Self-Employed',
  //   responsibilities: [
  //     'Worked on various client projects',
  //     'Developed custom web applications',
  //     'Provided technical support and maintenance',
  //   ],
  //   typeOfEmployment: 'Freelance',
  //   employmentDuration: 'Jan 2019 - Feb 2020',
  //   companyLink: 'https://www.linkedin.com/in/your-profile',
  // }
];

const Experience = () => {
  return (
    <div id ="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceList}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            <h3>{experience.title}</h3>
            <p>
              <a href={experience.companyLink} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                {experience.company} - {experience.typeOfEmployment}
              </a>
            </p>
            <p className={styles.employmentDetails}>
              <span>{experience.employmentDuration}</span>
            </p>
            <ul className={styles.responsibilities}>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;