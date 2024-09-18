import styles from './ExperienceStyles.module.css';

const experiences = [
  // {
  //   title: 'Software Developer 🧑🏽‍💻',
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
  //   title: 'Intern 🌱',
  //   company: 'Startup Inc',
  //   responsibilities: [
  //     'Assisted in the development of a mobile app',
  //     'Conducted market research',
  //     'Participated in team meetings',
  //     'Presented project updates to stakeholders',
  //   ],
  //   typeOfEmployment: 'Internship',
  //   employmentDuration: 'Jun 2021 - Dec 2021',
  //   companyLink: 'https://www.startupinc.com',
  // },
  // { 
  //   title: 'Frontend Developer 🖼️',
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
  {
  title: 'Software Engineer 🧑🏽‍💻',
  company: 'Golf 918 Systems', 
  responsibilities: [
    'Developing automated testing workflows using Playwright and GitHub Actions',
    'Creating and maintaining test cases & scripts for web applications',
    'Integrated testing frameworks to ensure software quality',
  ],
  typeOfEmployment: 'Intern',
  employmentDuration: 'Sep 2024 - Present',
  companyLink: 'https://www.linkedin.com/company/golf918/',
}
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
                {experience.company} 
              </a>
              <a className={styles.employmentDetails}> 
              &nbsp;- {experience.typeOfEmployment}
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