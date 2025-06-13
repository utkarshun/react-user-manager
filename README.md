# 👥 React User Manager

A simple React app to manage users with a mock backend using JSON Server. This project demonstrates CRUD operations, component-based structure, and API integration using Axios.

---

## 🚀 Features

- View all users
- Add a new user
- Edit existing user details
- Delete a user
- Uses JSON Server as backend (`db.json`)

---

## 📦 Tech Stack

- **Frontend**: React (Functional Components + Hooks)
- **Backend**: JSON Server (Local REST API)

---

## 📁 Folder Structure

react-user-manager/
├── public/
├── src/
│ └── components/
│ ├── UserList.js
│ ├── AddUser.js
│ └── EditUser.js
├── db.json
├── package.json
└── README.md

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-user-manager.git
cd react-user-manager
2. Install Dependencies
    npm install
3. Start the Backend (JSON Server)
  npx json-server --watch db.json --port 3001
Make sure db.json is present with initial dummy data.
4. Start the React App
  npm start
Now open http://localhost:3000 to view the app.


