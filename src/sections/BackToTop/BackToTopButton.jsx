import React, { useState, useEffect } from 'react';
import styles from './BackButtonStyles.module.css';

// BackToTopButton component displays a button that scrolls the page to the top
const BackToTopButton = () => {
    // State to control the visibility of the button
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // Get the height of the hero section
            const heroSectionHeight = document.querySelector('.heroSection').offsetHeight;
            // Show button if scrolled past the hero section, otherwise hide it
            if (window.scrollY > heroSectionHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll smoothly to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        // Button is shown or hidden based on showButton state
        <button
            className={`${styles['back-to-top']} ${showButton ? styles.show : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ↑
        </button>
    );
};

export default BackToTopButton;