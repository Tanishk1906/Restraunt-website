// ==========================================
// 🥗 MENU DATA
// ==========================================
const fullMenu = {
    Breakfast: {
        "🥗 Starters": [{ name: "Fresh Fruit Bowl", price: 150 }, { name: "Crispy Hash Browns", price: 120 }],
        "🍳 Main Food": [{ name: "Poha Jalebi", price: 90 }, { name: "Masala Dosa", price: 160 }]
    },
    Lunch: {
        "🍛 Main Food": [{ name: "Dal Makhani & Naan", price: 320 }, { name: "Dum Biryani", price: 280 }]
    }
    // ... yahan apna baki ka data add kar lena
};

// ==========================================
// 🍽️ TAB SWITCHING LOGIC
// ==========================================
function openMenu(evt, mealTime) {
    const menuContainer = document.getElementById('menu-grid');
    if (!menuContainer) return;

    menuContainer.innerHTML = '';
    const mealData = fullMenu[mealTime];

    if (mealData) {
        for (const [category, items] of Object.entries(mealData)) {
            items.forEach(item => {
                menuContainer.innerHTML += `
                    <div class="menu-card">
                        <h3>${item.name}</h3>
                        <p>₹${item.price}</p>
                        <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
                    </div>
                `;
            });
        }
    }
}

// ==========================================
// 🛒 TOAST & CART (Jaisa tumne likha tha)
// ==========================================
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function addToCart(name, price) {
    showToast(`${name} added!`);
}

// ==========================================
// 🤖 AI WAITER LOGIC
// ==========================================
async function sendMessage() {
    const inputField = document.getElementById('user-msg');
    const message = inputField.value.trim();
    if (!message) return;

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="message user-message">${message}</div>`;
    inputField.value = '';

    try {
        const response = await fetch('https://restraunt-website-xeqg.onrender.com/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message })
        });
        const data = await response.json();
        chatBox.innerHTML += `<div class="message ai-message">${data.reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        chatBox.innerHTML += `<div class="message ai-message">Error! 😔</div>`;
    }
}