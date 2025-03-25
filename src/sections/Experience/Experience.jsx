import styles from './ExperienceStyles.module.css';

const experiences = [
  {
  title: 'Software Engineer',
  company: 'Golf 918 Systems', 
  responsibilities: [
    'Developing automated testing workflows using Playwright and GitHub Actions',
    'Creating and maintaining test cases & scripts for web applications',
    'Integrated testing frameworks to ensure software quality',
  ],
  typeOfEmployment: 'Intern',
  employmentDuration: 'Sep 2024 - Dec 2024',
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