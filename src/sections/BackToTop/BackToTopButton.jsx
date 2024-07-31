import React, { useEffect } from 'react';
import styles from "./BackButtonStyles.module.css";

function BackToTopButton() {
    useEffect(() => {
        const handleScroll = () => {
            const backToTopButton = document.getElementById('back-to-top');
            if (window.scrollY > 100) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className={styles['back-to-top']} onClick={scrollToTop}>
            ↑
        </button>
    );
}

export default BackToTopButton;