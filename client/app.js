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

// ==========================================
// 🌟 UI HELPER: TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>';
    
    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// 🍽️ MENU LOGIC
// ==========================================
function openMenu(evt, mealTime) {
    // Tab switching visual logic
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    evt.currentTarget.classList.add('active');

    const menuContainer = document.getElementById('menu-content');
    
    // Fade out effect
    menuContainer.style.opacity = 0;

    setTimeout(() => {
        menuContainer.innerHTML = ''; 
        const mealData = fullMenu[mealTime];

        if (!mealData) return;

        // Loop through sub-categories
        for (const [subCategory, items] of Object.entries(mealData)) {
            // Section Title
            const subTitle = document.createElement('h3');
            subTitle.className = 'sub-category-title';
            subTitle.innerText = subCategory;
            menuContainer.appendChild(subTitle);

            // Grid
            const grid = document.createElement('div');
            grid.className = 'menu-grid';

            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'menu-card';
                card.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <span class="price-tag">₹${item.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${item.price})">
                        <i class="fas fa-plus"></i> Add to Cart
                    </button>
                `;
                grid.appendChild(card);
            });
            menuContainer.appendChild(grid);
        }
        
        // Fade in
        menuContainer.style.opacity = 1;
    }, 300);
}

// Load Breakfast by default
document.addEventListener("DOMContentLoaded", () => {
    const firstTab = document.querySelector('.tab-btn');
    if(firstTab) {
        openMenu({ currentTarget: firstTab }, 'Breakfast');
    }
});

// ==========================================
// 📅 RESERVATION LOGIC
// ==========================================
document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    // Loading state
    btn.innerText = "Booking...";
    btn.disabled = true;

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        guests: document.getElementById('guests').value
    };

    try {
        const response = await fetch(`${API_URL}/reservation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            const data = await response.json();
            showToast(data.message || "Table booked successfully!", "success");
            document.getElementById('reservation-form').reset();
        } else {
            showToast("Failed to book table. Please try again.", "error");
        }
    } catch (err) {
        console.error(err);
        showToast("Network error. Check connection.", "error");
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
});

// ==========================================
// 🛒 CART LOGIC
// ==========================================
let cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
    showToast(`${name} added to cart!`);
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartCount = document.getElementById('cart-count');
    const totalAmountElem = document.getElementById('total-amount');
    
    cartItemsContainer.innerHTML = ''; 
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is currently empty.</p>';
    }

    cart.forEach((item) => {
        total += (item.price * item.quantity);
        count += item.quantity;
        
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>₹${item.price} x ${item.quantity}</small>
            </div>
            <strong>₹${item.price * item.quantity}</strong>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartCount.innerText = count;
    totalAmountElem.innerText = total;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

async function placeOrder() {
    if (cart.length === 0) {
        showToast("Your cart is empty!", "error");
        return;
    }
    
    const tableNumber = document.getElementById('table-number').value;
    if (!tableNumber) {
        showToast("Please enter your table number!", "error");
        return;
    }

    const finalAmount = parseInt(document.getElementById('total-amount').innerText);
    const orderBtn = document.querySelector('.order-btn');
    
    orderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const orderData = {
        tableNumber: parseInt(tableNumber),
        items: cart,
        totalAmount: finalAmount
    };

    try {
        const response = await fetch(`${API_URL}/order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            showToast(`Order placed for Table ${tableNumber}! Total: ₹${finalAmount}`, "success");
            cart = [];
            updateCartUI();
            document.getElementById('table-number').value = '';
            setTimeout(toggleCart, 1500);
        } else {
            showToast("Error placing order.", "error");
        }
    } catch (error) {
        console.error(error);
        showToast("Connection failed.", "error");
    } finally {
        orderBtn.innerHTML = 'Place Order <i class="fas fa-paper-plane"></i>';
    }
}

// Mobile Menu Toggle (Simple implementation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.width = '100%';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
    }
}