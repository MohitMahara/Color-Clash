# 🎮 Color Clash

Color Clash is a real-time, color-based betting game where players bet on Red, Blue, or Green in 2-minute rounds. The winning color is randomly selected each round, and players earn 2x of their stake coins.

---

## 🚀 Features

- 🔁 Automatic round cycle every 2 minutes
- 👥 Real-time round & timer sync across users
- 🎨 Color-based betting (Red, Blue, Green)
- 🧮 Smart backend logic for round resolution & payouts

---

## 🛠️ Tech Stack

- **Frontend**: React + Js + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB 
- **Deployment**: Render and Vite

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/MohitMahara/Color-Clash.git
cd Color-Clash
```

### 3️⃣ Frontend Setup
```sh
cd client
npm install  # Install dependencies
npm start    # Run the frontend server
```

### 2️⃣ Backend Setup
```sh
cd server
npm install  # Install dependencies
npm run server    # Run the backend server
```

## ⚙️ Environment Variables

Create a `.env` file in the root of the `client` directory and add:
```
VITE_SERVER_API=your-server-url (eg: http://localhost:8000)

```

Create a `.env` file in the root of the `server` directory and add:
```
MONGO_URI=your-mongodb-url
JWT_SECRET=your-secret-key
PORT=5000
```

## 📜 License

This project is licensed under the MIT License.
