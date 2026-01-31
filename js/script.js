document.addEventListener('DOMContentLoaded', () => {
    console.log("Rock Cycle Website Loaded!");

    // Simple scroll effect for navigation
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Navigating to: ${e.target.innerText}`);
            // You can add more complex animations here
        });
    });
});