

themeBtn.innerHTML = '<i class="fa fa-moon"></i>';

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
