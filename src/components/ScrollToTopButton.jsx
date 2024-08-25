import { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
<i className={`fa-solid fa-arrow-up scrollToTop ${isVisible ? 'show' : ''}`} onClick={scrollToTop}></i>
       
    );
}
