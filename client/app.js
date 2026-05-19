const API_URL = 'https://restraunt-website-xeqg.onrender.com/api';

// 1. Fetch and Display Menu
async function fetchMenu() {
    try {
        const response = await fetch(`${API_URL}/menu`);
        const menuItems = await response.json();
        
        const menuContainer = document.getElementById('menu-container');
        menuContainer.innerHTML = ''; // Clear loading text

        menuItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <strong>₹${item.price}</strong>
            `;
            menuContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
}

// 2. Handle Reservation Submission
document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // In a full version, we POST this to /api/reservation
    const message = document.getElementById('form-message');
    message.style.color = 'green';
    message.innerText = "Table request sent successfully! We will contact you shortly.";
    e.target.reset();
});

// Initialize
fetchMenu();