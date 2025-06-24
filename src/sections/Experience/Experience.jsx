import styles from './ExperienceStyles.module.css';

// Array of experience objects, each representing a job or internship
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

// Functional component to display experience section
const Experience = () => {
  return (
    <div id="experience" className={styles.container}>
      {/* Section title */}
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceList}>
        {/* Map through experiences and render each as a card */}
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            {/* Job title */}
            <h3>{experience.title}</h3>
            <p>
              {/* Company name as a link */}
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                {experience.company}
              </a>
              {/* Type of employment */}
              <a className={styles.employmentDetails}>
                &nbsp;- {experience.typeOfEmployment}
              </a>
            </p>
            {/* Employment duration */}
            <p className={styles.employmentDetails}>
              <span>{experience.employmentDuration}</span>
            </p>
            {/* List of responsibilities */}
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