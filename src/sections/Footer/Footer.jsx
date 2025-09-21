import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        © 2024 Hirbod Hosseini.
        <br />
        All rights reserved. 
      </span>
      {/* <span>
        Web Dev Guide by {' '}
        <a href="https://www.youtube.com/watch?v=ZpIel9cv4Jk&t=6s" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 400 }}>
          @howtobecomeadeveloper
        </a>
      </span> */}
    </footer>
  );
}
