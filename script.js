// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Transform hamburger to X
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    });

    document.querySelectorAll('.nav-link').forEach(n =>
        n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        })
    );
}

// Navbar Blur Effect on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.14), 0 8px 40px rgba(0,0,0,0.45)';
        navbar.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    } else {
        navbar.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.3)';
        navbar.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
    }
});

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal only once
    });
}, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Typing Effect Animation
const typeTarget = document.getElementById('type-text');
if (typeTarget) {
    const words = [
        "BSc Info Tech Student.",
        "Web Developer.",
        "Problem Solver.",
        "Tech Enthusiast."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeTarget.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeTarget.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start effect
    setTimeout(typeEffect, 1000);
}


// ============================================================
// TIMELINE LINE DRAW ON SCROLL
// ============================================================
document.querySelectorAll('.timeline').forEach(tl => {
    const tlObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.classList.add('line-drawn');
            tlObs.unobserve(e.target);
        });
    }, { threshold: 0.1 });
    tlObs.observe(tl);
});

// ============================================================
// SKILL TAGS STAGGER ON SCROLL
// ============================================================
const skillsContainer = document.querySelector('.skill-tags');
if (skillsContainer) {
    const tagObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.querySelectorAll('.skill-tag').forEach((tag, i) => {
                setTimeout(() => tag.classList.add('tag-visible'), i * 80);
            });
            tagObs.unobserve(e.target);
        });
    }, { threshold: 0.3 });
    tagObs.observe(skillsContainer);
}

// ============================================================
// ROW SPOTLIGHT — mouse-tracked glow per row
// ============================================================
document.querySelectorAll('.project-row, a.contact-row').forEach(row => {
    row.addEventListener('mousemove', e => {
        const r = row.getBoundingClientRect();
        row.style.setProperty('--gx', ((e.clientX - r.left) / r.width  * 100) + '%');
        row.style.setProperty('--gy', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
});
