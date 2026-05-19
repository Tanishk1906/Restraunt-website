# 🍛 Apna Dhaba — Full-Stack Restaurant Management System

<div align="center">

## 🏠 Bringing the Traditional Dhaba Experience to the Digital World

A modern **full-stack restaurant management platform** built with **Node.js, Express.js, MongoDB, and Vanilla JavaScript**.
Designed to simplify restaurant operations including **digital ordering, smart reservations, menu management, and AI-powered customer interaction**.

🌐 **Frontend Live Demo:**
[Apna Dhaba Live Website](https://restraunt-website-beta.vercel.app/?utm_source=chatgpt.com)

⚙️ **Backend API Deployment:**
[Backend API Dashboard](https://dashboard.render.com/web/srv-d8662prrjlhs73ai1c30?utm_source=chatgpt.com)

🐙 **GitHub Repository:**
[GitHub Repository](https://github.com/Tanishk1906/Restraunt-website?utm_source=chatgpt.com)

</div>

---

# 📌 Project Overview

**Apna Dhaba** is a complete restaurant management solution that combines a responsive customer-facing frontend with a scalable backend infrastructure.

The platform enables users to:

✅ Explore an interactive food menu
✅ Add dishes to a live cart system
✅ Place real-time orders
✅ Reserve restaurant tables instantly
✅ Interact with an AI-powered waiter interface
✅ Experience a fully responsive desi-themed UI

This project demonstrates practical implementation of:

* REST APIs
* Frontend–Backend Integration
* Database Management
* Real-time User Interaction
* DOM Manipulation
* Full-Stack Deployment Workflow

---

# ✨ Core Features

## 🍽️ Dynamic Interactive Menu

* Category-wise filtering system
* Smooth UI interactions using Vanilla JavaScript
* Organized sections for:

  * Breakfast
  * Lunch
  * Dinner
  * Special Thalis
  * Beverages

---

## 🛒 Smart Cart & Order System

* Add/remove items dynamically
* Real-time total amount calculation
* Seamless order submission to MongoDB database
* Kitchen-side order storage system

---

## 📅 Table Reservation System

Users can:

* Book tables online
* Select guest count
* Choose reservation date
* Receive an automatically assigned table number

### 🎯 Unique Logic

A random table number between **1–20** is generated for every successful reservation.

---

## 🤖 AI Waiter Interface

Integrated chatbot UI capable of future expansion with:

* Food recommendations
* Customer support
* Order assistance
* Conversational interaction

> 🚧 Gemini API integration is currently under development.

---

## 📱 Fully Responsive UI

Designed with a warm Indian dhaba aesthetic featuring:

* Mobile responsiveness
* Modern CSS animations
* Smooth scrolling
* User-friendly layout
* Attractive desi-inspired color palette

---

# 🛠️ Tech Stack

## 🎨 Frontend Technologies

| Technology        | Purpose                     |
| ----------------- | --------------------------- |
| HTML5             | Structure                   |
| CSS3              | Styling & Responsive Design |
| JavaScript (ES6+) | Frontend Logic              |
| Fetch API         | API Communication           |

---

## ⚙️ Backend Technologies

| Technology    | Purpose               |
| ------------- | --------------------- |
| Node.js       | Runtime Environment   |
| Express.js    | Backend Framework     |
| MongoDB Atlas | Cloud Database        |
| Mongoose      | Database Modeling     |
| dotenv        | Environment Variables |
| CORS          | Cross-Origin Requests |

---

# 📂 Project Structure

```text
Restraunt-website/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── models/
│   ├── MenuItem.js
│   ├── Order.js
│   └── Reservation.js
│
├── routes/
│   ├── menu.js
│   ├── order.js
│   └── reservation.js
│
├── server.js
├── package.json
└── .env
```

---

# ⚡ Installation & Local Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Tanishk1906/Restraunt-website.git

cd Restraunt-website
```

---

## 2️⃣ Install Backend Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 4️⃣ Start the Backend Server

```bash
node server.js
```

Server will start on:

```text
http://localhost:5000
```

---

## 5️⃣ Run the Frontend

Update API URLs inside:

```text
client/app.js
```

Replace deployed API URL with:

```javascript
http://localhost:5000/api
```

Now open:

```text
client/index.html
```

Or use:

* VS Code Live Server Extension

---

# 📡 API Endpoints

# 🪑 Reservation API

## Endpoint

```http
POST /api/reservation
```

## Sample Payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "date": "2026-05-20",
  "guests": 4
}
```

## Sample Response

```json
{
  "message": "Reservation Successful",
  "tableNumber": 7
}
```

---

# 🛒 Order API

## Endpoint

```http
POST /api/order
```

## Sample Payload

```json
{
  "tableNumber": 7,
  "items": [
    {
      "name": "Filter Coffee",
      "price": 60,
      "quantity": 2
    }
  ],
  "totalAmount": 120
}
```

## Sample Response

```json
{
  "message": "Order placed successfully"
}
```

---

# 🚀 Deployment

| Platform      | Purpose            |
| ------------- | ------------------ |
| Vercel        | Frontend Hosting   |
| Render        | Backend Deployment |
| MongoDB Atlas | Database Hosting   |

---

# 🧠 Learning Outcomes

This project helped in gaining hands-on experience with:

* Full-Stack Development
* RESTful API Design
* MongoDB Database Integration
* Frontend–Backend Communication
* Deployment & Hosting
* Responsive UI Design
* Real-world Project Architecture

---

# 🔮 Future Enhancements

## 🚧 Planned Features

* Gemini AI Integration
* Admin Dashboard
* Payment Gateway Integration
* Live Order Tracking
* Authentication & Authorization
* Online Food Delivery Support
* Customer Reviews & Ratings
* Real-Time Notifications

---

# 👨‍💻 Developer

## Tanishka Meena

🎓 2nd-Year B.Tech CSE Student
🏫 MANIT Bhopal

🔗 **LinkedIn:**
[Tanishka Meena LinkedIn](https://www.linkedin.com/in/tanishka-meena-10aa72323/?utm_source=chatgpt.com)

🐙 **GitHub:**
[Tanishka Meena GitHub](https://github.com/Tanishk1906?utm_source=chatgpt.com)

---

# 🌟 Support the Project

If you liked this project:

⭐ Star the repository
🍴 Fork the project
🛠️ Contribute to development
📢 Share feedback & suggestions

---

<div align="center">

## ❤️ Made with Passion, Code & Chai ☕

</div>
