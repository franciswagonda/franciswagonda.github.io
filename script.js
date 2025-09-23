
themeBtn.innerHTML = '<i class="fa fa-moon"></i>';


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
window.addEventListener('DOMContentLoaded', revealSection);

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

// Dynamic greeting based on time
const header = document.getElementById('home');
if (header) {
  const greeting = document.createElement('div');
  greeting.style.fontSize = '1.2rem';
  greeting.style.margin = '0.5rem 0 1rem 0';
  greeting.style.color = '#00bcd4';
  const hour = new Date().getHours();
  if (hour < 12) greeting.textContent = 'Good morning!';
  else if (hour < 18) greeting.textContent = 'Good afternoon!';
  else greeting.textContent = 'Good evening!';
  header.insertBefore(greeting, header.children[2]);
}

// Console message
console.log("Welcome to Wagonda Francis Precious' Portfolio Website!");
