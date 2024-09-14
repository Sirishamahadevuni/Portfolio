// JavaScript for interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Collapsible Sections
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach((collapsible) => {
        const button = collapsible.querySelector('.collapsible-button');
        const content = collapsible.querySelector('.collapsible-content');
        button.addEventListener('click', () => {
            content.classList.toggle('active');
            button.classList.toggle('active');
        });
    });

    // Smooth Scrolling
    const links = document.querySelectorAll('.navbar a[href^="#"]');
    links.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Social Media Links
    document.querySelector('.github-button').addEventListener('click', () => {
        window.open('https://github.com/Sirishamahadevuni', '_blank');
    });

    document.querySelector('.linkedin-button').addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/mahadevuni-shirisha-31ba4422a', '_blank');
    });

    document.querySelector('.telegram-button').addEventListener('click', () => {
        window.open('https://t.me/SirishaMahadevuni', '_blank');
    });

    // Read More Button
    document.querySelector('.read-more-button').addEventListener('click', () => {
        const moreContent = document.querySelector('.more-content');
        moreContent.classList.toggle('active');
    });

    // Hire Me Button
    document.querySelector('.hire-me-button').addEventListener('click', () => {
        window.location.href = '#contact'; // Scrolls to the contact section
    });

    // Contact Me Button
    document.querySelector('.contact-me-button').addEventListener('click', () => {
        window.location.href = '#contact'; // Scrolls to the contact section
    });

    // Navigation Buttons
    document.querySelector('.home-button').addEventListener('click', () => {
        window.location.href = '#home';
    });

    document.querySelector('.about-button').addEventListener('click', () => {
        window.location.href = '#about';
    });

    document.querySelector('.education-button').addEventListener('click', () => {
        window.location.href = '#education';
    });

    document.querySelector('.skills-button').addEventListener('click', () => {
        window.location.href = '#skills';
    });

    document.querySelector('.achievements-button').addEventListener('click', () => {
        window.location.href = '#achievements';
    });

    document.querySelector('.contact-button').addEventListener('click', () => {
        window.location.href = '#contact';
    });

    document.querySelector('.lets-talk-button').addEventListener('click', () => {
        window.location.href = '#contact'; // Scrolls to the contact section
    });

    // Form Submission
    const form = document.querySelector('.contact form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Form data
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const phone = form.querySelector('input[name="phone"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        // Simple validation
        if (!name || !email || !phone || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Send message
        // Note: Use a backend service to actually send an email or SMS. This is just a placeholder.
        alert('Thank you for your message! We will get back to you shortly.');

        // Reset form
        form.reset();
    });

    // Image Slider
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    document.querySelector('.prev-slide').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next-slide').addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    showSlide(currentIndex); // Show the first slide initially

    // Dynamic Content Loading
    const loadMoreButton = document.querySelector('.load-more');
    const contentContainer = document.querySelector('.dynamic-content-container');

    loadMoreButton.addEventListener('click', () => {
        const newContent = document.createElement('div');
        newContent.classList.add('dynamic-content');
        newContent.innerHTML = '<p>New dynamically loaded content.</p>';
        contentContainer.appendChild(newContent);
    });

    // Element Animation
    const animateButton = document.querySelector('.animate-button');
    const elementToAnimate = document.querySelector('.animated-element');

    animateButton.addEventListener('click', () => {
        elementToAnimate.classList.add('animate');
        setTimeout(() => {
            elementToAnimate.classList.remove('animate');
        }, 1000); // Adjust duration to match CSS animation duration
    });
});
