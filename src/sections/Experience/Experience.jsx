import styles from './ExperienceStyles.module.css';

// Array of experience objects, each representing a job or internship
const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Immensa Group',
    responsibilities: [
      'Designed and developed a responsive website using React & Tailwind',
      'Collaborated with founder to align implementation with business goals',
      'Deployed website and provided ongoing maintenance and support',
    ],
    typeOfEmployment: 'Freelance',
    employmentDuration: 'June 2025 - Aug 2025',
    companyLink: 'https://www.immensagroup.com/',
  },
  {
    title: 'QA Developer',
    company: 'Golf 918', 
    responsibilities: [
      'Developed an automated testing pipeline using Playwright and GitHub Actions',
      'Wrote and maintained test scripts & user flows for web applications',
      'Integrated testing frameworks to ensure software quality',
    ],
    typeOfEmployment: 'Intern',
    employmentDuration: 'Sep 2024 - Dec 2024',
    companyLink: 'https://www.golf918.com/',
  }
];

// Functional component to display experience section
const Experience = () => {
  return (
    <section id="experience" className={styles.container} aria-label="Experience section">
      {/* Section title */}
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceList}>
        {/* Map through experiences and render each as a card */}
        {experiences.map((experience, index) => (
          <article key={index} className={styles.experienceCard} aria-label={`${experience.title} at ${experience.company}`}>
            {/* Job title */}
            <h3>{experience.title}</h3>
            <p>
              {/* Company name as a link */}
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.companyLink}
                aria-label={`Visit ${experience.company} website`}
              >
                {experience.company}
              </a>
              {/* Type of employment */}
              <span className={styles.employmentDetails}>
                &nbsp;- {experience.typeOfEmployment}
              </span>
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
              </article>
        ))}
      </div>
        </section>
  );
};

export default Experience;