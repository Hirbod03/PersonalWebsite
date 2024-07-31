import React, { useState, useEffect } from 'react';
import styles from './BackButtonStyles.module.css';

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSectionHeight = document.querySelector('.heroSection').offsetHeight;
            if (window.scrollY > heroSectionHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`${styles['back-to-top']} ${showButton ? styles.show : ''}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};

export default BackToTopButton;