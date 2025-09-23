
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic greeting that updates in real-time
    const header = document.getElementById('home');
    if (header) {
        const greeting = document.createElement('div');
        greeting.style.fontSize = '2.5rem';
        greeting.style.margin = '1rem 0';
        greeting.style.color = '#00bcd4';
        greeting.style.fontWeight = 'bold';
        greeting.style.textAlign = 'center';
        greeting.id = 'dynamic-greeting';
        
        function updateGreeting() {
            const hour = new Date().getHours();
            if (hour < 12) greeting.textContent = ' Good Morning';
            else if (hour < 18) greeting.textContent = ' Good Afternoon ';
            else greeting.textContent = ' Good Evening ';
        }

        // Initial greeting
        updateGreeting();
        
        // Update greeting every minute
        setInterval(updateGreeting, 60000);
        
        // Insert after the subtitle
        const subtitle = header.querySelector('.subtitle');
        if (subtitle) {
            header.insertBefore(greeting, subtitle.nextSibling);
        }
    }

    // Smooth scroll effect for navigation
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animated section reveal on scroll
    const sections = document.querySelectorAll('section, header');
    const revealSection = () => {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', revealSection);
    revealSection();

    // Profile image hover effect
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.addEventListener('mouseenter', () => {
            profilePic.style.boxShadow = '0 0 32px 8px #00bcd4cc';
            profilePic.style.transform = 'scale(1.07)';
            profilePic.style.transition = 'all 0.3s';
        });
        profilePic.addEventListener('mouseleave', () => {
            profilePic.style.boxShadow = '0 4px 24px rgba(0,188,212,0.15)';
            profilePic.style.transform = 'scale(1)';
        });
    }

    // Console message
    console.log("Welcome to Wagonda Francis Precious' Portfolio Website!");
});
