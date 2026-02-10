/**
 * つむぐね (tsumugune) - Common Scripts
 * 
 * Note: Core logic for each page is embedded in the HTML files 
 * for ease of deployment and direct reference. 
 * This file serves as a placeholder for any global utilities 
 * needed for future scaling.
 */

console.log("つむぐね - Website initialized.");

// Force smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
