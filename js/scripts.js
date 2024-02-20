// Import GenAI SDK (assuming it's included via a CDN)
// Replace 'YOUR_API_KEY' with your actual API key
import GenAI from 'https://cdn.genai.ai/sdk/genai-sdk.min.js';

window.addEventListener('DOMContentLoaded', event => {
    // Initialize GenAI with your API key
    const genai = new GenAI('YOUR_API_KEY');

    // Function to process image using GenAI
    const processImage = async (imageUrl) => {
        try {
            // Call GenAI API to analyze the image
            const result = await genai.analyzeImage(imageUrl);

            // Process the result (e.g., display it on the page)
            console.log('GenAI Analysis Result:', result);
        } catch (error) {
            console.error('Error processing image with GenAI:', error);
        }
    };

    // Example usage: Process image when the page is loaded
    processImage('https://example.com/image.jpg');
});



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
