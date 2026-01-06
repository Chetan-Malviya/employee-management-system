# 👥 Employee Management System (React + Context API + LocalStorage)

A complete Employee Management System built using React.js, Context API, and LocalStorage for persistence.
This project demonstrates how to build a fully functional frontend system with authentication, dashboards, task management, and state sharing through React Context.

---

## 🚀 Features

- 🔐 Login System for Admin and Employees

- 👨‍💼 Admin Dashboard (Manage Employees & Tasks)

- 👨‍💻 Employee Dashboard (View & Update Task Status)

- 📝 Create, assign, and manage tasks

- 💾 Persistent data storage using localStorage

- ⚛️ State management via Context API (Auth & Task context)

- 🔄 Real-time UI updates using React state

- 🧩 Clean, modular, and beginner-friendly React structure

---

## 🔑 Demo Access (For Testing)

Use the following demo credentials to explore the application:

### Admin Login
- **Email:** `admin@example.com`
- **Password:** `123`

### Employee Login
- **Email:** `employee1@example.com` to `employee5@example.com`
- **Password:** `123`

> ⚠️ **Note:** These are demo credentials stored in `localStorage` for testing and demonstration purposes only.

---

| Technology            | Description                      |
| --------------------- | -------------------------------- |
| **React.js**          | Frontend library for building UI |
| **JavaScript (ES6+)** | Core language                    |
| **Context API**       | Global state management          |
| **LocalStorage**      | Persistent client-side storage   |
| **HTML5 / CSS3**      | UI layout and styling            |

---

## 📁 Project Structure

employee-management-system/

│

├── src/

│   ├── components/        # Reusable UI components

│   ├── context/           # AuthContext & TaskContext

│   ├── pages/             # Admin & Employee dashboards

│   ├── data/              # Initial dummy data

│   ├── utils/             # Helper functions

│   ├── App.js             # Main application

│   └── index.js           # Entry point

│

└── package.json

---

## 🧪 How It Works

- User logs in → data saved in localStorage

- Role-based dashboard appears (Admin/Employee)

- Admin can:

  - Create employees

  - Assign tasks

  - Manage task data

- Employee can:

  - View tasks

  - Update task status

- Context API distributes global state across components

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Chetan-Malviya/employee-management-system.git
cd employee-management-system
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

The app will start on:
```bash
http://localhost:3000
```

---

## 👨‍💻 Author

**Chetan Malviya**  
Full Stack Developer (MERN)
