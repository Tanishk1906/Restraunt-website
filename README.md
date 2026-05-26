# 🍽️ Apna Dhaba — Restaurant Website

A responsive, full-stack restaurant web application featuring a dynamic menu, AI-powered assistance, and a real-time table booking system.

🔗 **Live Demo:** https://restraunt-website-beta.vercel.app/

---

## ✨ Features

- **Dynamic Menu** — Browse dishes with rich visuals and category filtering
- **Table Booking API** — Real-time reservation system backed by MongoDB
- **AI Integration** — Google Generative AI (`@google/generative-ai`) for smart interactions
- **Responsive Design** — Mobile-friendly layout built with vanilla CSS (52%+ of the codebase)
- **Font Awesome Icons** — Polished UI elements throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla JavaScript, HTML5, CSS3 |
| Backend | Node.js, Express 5 |
| Database | MongoDB (via Mongoose) |
| AI | Google Generative AI SDK |
| Routing | React Router DOM |
| Deployment | Vercel |

---

## 📁 Project Structure

```
Restraunt-website/
├── client/          # Frontend assets (HTML, CSS, JS)
├── models/          # Mongoose data models
├── routes/          # Express API route handlers
├── server.js        # Entry point — Express app setup
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB instance (local or MongoDB Atlas)
- Google Generative AI API key

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tanishk1906/Restraunt-website.git
cd Restraunt-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your MONGODB_URI and GEMINI_API_KEY
```

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_generative_ai_key
PORT=5000
```

### Running Locally

```bash
node server.js
```

The server will start on `http://localhost:5000`. Open `client/index.html` in your browser or serve the `client/` folder via a static server.

---

## 🌐 Deployment

This project is deployed on **Vercel**.

To deploy your own instance:

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add the environment variables (`MONGODB_URI`, `GEMINI_API_KEY`) in the Vercel dashboard
4. Deploy — Vercel handles the rest

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `express` | Web server framework |
| `mongoose` | MongoDB ODM |
| `cors` | Cross-origin request handling |
| `dotenv` | Environment variable management |
| `@google/generative-ai` | AI-powered features |
| `react-router-dom` | Client-side routing |
| `@fortawesome/fontawesome-free` | Icon library |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

> Built with ❤️ by [Tanishk1906](https://github.com/Tanishk1906)
