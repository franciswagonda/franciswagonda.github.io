
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

    // Console message
    console.log("Welcome to Wagonda Francis Precious' Portfolio Website!");
});
