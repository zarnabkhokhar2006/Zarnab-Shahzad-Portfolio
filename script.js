document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate Elements on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animated-text');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Animate Skill Bars
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach(bar => {
            const width = bar.textContent;
            bar.style.width = width;
        });
    };

    // Only animate skill bars when skills section is in view
    const skillsSection = document.querySelector('#skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillsObserver.observe(skillsSection);

    // Floating animation for profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.style.animation = 'float 5s ease-in-out infinite';
    }

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! Zarnab is always here to serve you');
            this.reset();
        });
    }
   
    
});