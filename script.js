document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Update active class in navbar
            document.querySelectorAll('.navbar ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Intersection Observer for fade-in effect on sections
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // When 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Adjust for earlier/later trigger
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Set initial active link on page load (if URL hash exists)
    const initialHash = window.location.hash;
    if (initialHash) {
        const initialLink = document.querySelector(`.navbar ul li a[href="${initialHash}"]`);
        if (initialLink) {
            initialLink.classList.add('active');
            document.querySelector(initialHash).scrollIntoView();
        }
    } else {
        // Set 'About Me' as active by default if no hash
        document.querySelector('.navbar ul li a[href="#about"]').classList.add('active');
    }

    // Observe sections to update active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // Adjust this value to trigger when 50% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
