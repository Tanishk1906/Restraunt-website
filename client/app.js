const API_URL = 'https://restraunt-website-xeqg.onrender.com/api';

// Complete Structured Menu Data
const fullMenu = {
    Breakfast: {
        "🥗 Starters": [
            { name: "Fresh Fruit Bowl", desc: "Seasonal exotic fruits tossed with honey and chia seeds.", price: 150 },
            { name: "Crispy Hash Browns", desc: "Golden pan-fried potato patties with garlic mayo.", price: 120 }
        ],
        "🍳 Main Food": [
            { name: "Poha Jalebi", desc: "Authentic fluffy Indori poha served with hot sweet jalebi.", price: 90 },
            { name: "Masala Dosa", desc: "Crispy rice crepe filled with spiced potatoes and chutneys.", price: 160 }
        ],
        "☕ Drinks": [
            { name: "Filter Coffee", desc: "Classic South Indian strong brewed coffee.", price: 60 },
            { name: "Fresh Orange Juice", desc: "100% freshly squeezed oranges without added sugar.", price: 110 }
        ]
    },
    Lunch: {
        "🥗 Starters": [
            { name: "Paneer Tikka", desc: "Soft cottage cheese chunks grilled in tandoor with rich spices.", price: 250 },
            { name: "Hara Bhara Kabab", desc: "Spinach and green peas patties deep-fried to perfection.", price: 210 }
        ],
        "🍛 Main Food": [
            { name: "Dal Makhani & Naan", desc: "Overnight slow-cooked creamy black lentils with butter garlic naan.", price: 320 },
            { name: "Dum Biryani", desc: "Aromatic basmati rice slow-cooked with fresh veggies and saffron.", price: 280 }
        ],
        "🍹 Drinks": [
            { name: "Mango Sweet Lassi", desc: "Thick, sweet yogurt drink blended with fresh mango pulp.", price: 90 },
            { name: "Virgin Mojito", desc: "Refreshing mint, lime juice, and soda combination.", price: 140 }
        ]
    },
    Dinner: {
        "🥗 Starters": [
            { name: "Stuffed Mushrooms", desc: "Button mushrooms stuffed with cheese and baked.", price: 270 },
            { name: "Chilli Paneer Dry", desc: "Wok-tossed spicy paneer with bell peppers and soy sauce.", price: 240 }
        ],
        "🍲 Main Food": [
            { name: "Kadhai Paneer", desc: "Paneer cooked in a rich, spicy tomato gravy with coriander.", price: 340 },
            { name: "Jeera Rice & Dal Tadka", desc: "Cumin-flavored rice served with spiced yellow lentils.", price: 240 }
        ],
        "🍷 Drinks": [
            { name: "Masala Chaas", desc: "Spiced Indian buttermilk, perfect for digestion.", price: 60 },
            { name: "Diet Coke", desc: "Chilled zero-calorie cola.", price: 70 }
        ]
    },
    Thali: {
        "🍱 Special Thalis": [
            { name: "Rajasthani Royal Thali", desc: "Authentic Dal Baati Churma, Gatte ki Sabzi, Garlic Chutney, and Chaas.", price: 380 },
            { name: "Maharaja Thali", desc: "Welcome drink, 3 Premium Veggies, Dal, Rice, 3 Butter Rotis, Papad, Salad, Sweet.", price: 450 },
            { name: "Mini Executive Thali", desc: "2 Veggies, Dal Tadka, Jeera Rice, and 3 Rotis. Perfect for a quick meal.", price: 250 }
        ]
    }
};

// Function to handle tab switching and rendering
function openMenu(evt, mealTime) {
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    evt.currentTarget.classList.add('active');

    const menuContainer = document.getElementById('menu-content');
    menuContainer.innerHTML = ''; // Clear old content
    menuContainer.style.opacity = 0; // Animation start

    const mealData = fullMenu[mealTime];

    // Loop through sub-categories (Starters, Food, Drinks)
    for (const [subCategory, items] of Object.entries(mealData)) {
        // Create Section Title
        const subTitle = document.createElement('h3');
        subTitle.className = 'sub-category-title';
        subTitle.innerText = subCategory;
        menuContainer.appendChild(subTitle);

        // Create Grid for items
        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        // Add items to grid
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <span class="price-tag">₹${item.price}</span>
            `;
            grid.appendChild(card);
        });

        menuContainer.appendChild(grid);
    }

    // Fade-in animation effect
    setTimeout(() => {
        menuContainer.style.transition = "opacity 0.4s ease-in-out";
        menuContainer.style.opacity = 1;
    }, 50);
}

// Handle Reservation Submission with Live Backend
document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const RESERVATION_API = 'https://restraunt-website-xeqg.onrender.com/api/reservation';
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        guests: document.getElementById('guests').value
    };

    try {
        const response = await fetch(RESERVATION_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const message = document.getElementById('form-message');
        if(response.ok) {
            message.style.color = 'green';
            message.innerText = "🎉 Table booked successfully! Check your database.";
            e.target.reset();
        } else {
            message.style.color = 'red';
            message.innerText = "Error booking table. Please try again.";
        }
    } catch (err) {
        console.error("Booking error:", err);
    }
});

// Load Breakfast by default when page loads
document.addEventListener("DOMContentLoaded", () => {
    const firstTab = document.querySelector('.tab-btn');
    if(firstTab) {
        openMenu({ currentTarget: firstTab }, 'Breakfast');
    }
});