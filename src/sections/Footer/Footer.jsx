import styles from "./Footer.module.css";
import messiGif from '../../assets/messi.gif';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        <img
          src={messiGif}
          alt="greiz gif"
          style={{ width: '100px', height: '100px', objectFit: 'contain', pointerEvents: 'none', userSelect: 'none' }}
          draggable={false}
          onContextMenu={e => e.preventDefault()}
        />
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
