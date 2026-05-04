<div align="center">

# 🗂️ WorkHub — Employee Management System

A modern, dark-themed Employee Management System built with **React** and **Tailwind CSS**.  
Manage tasks, track progress, and empower your team — all in one place.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-A88AED?style=flat-square)

</div>

---

## ✨ Features

### 👤 Authentication
- **Sign In** for existing employees and admins
- **Self-Registration** — new employees can create an account with name, email, job title, department, and password
- Admin accounts are seeded manually (not self-registerable by design)
- Session persisted via `localStorage` — stay logged in on refresh

### 🛠️ Admin Dashboard
- Assign tasks to any employee with title, description, due date, and category
- Live employee autocomplete when filling the "Assign To" field
- **Team Overview table** — see every employee's new / active / completed / failed task counts plus a live progress bar
- Changes instantly reflected in `localStorage`

### 👷 Employee Dashboard
- Personalised greeting with role and today's date
- **Overall progress banner** showing completion percentage
- 4 stat cards — New, In Progress, Completed, Failed
- Horizontal scrollable **task board** with colour-coded cards per status
- Task cards show category pill, due date, description, and status-specific action buttons

### 🎨 Design
- Dark theme — `#0C0B12` background, `#13111E` cards
- Accent colour **`#A88AED`** (soft violet) + text colour **`#FFFEEC`** (warm cream)
- Outfit typeface (Google Fonts)
- Smooth hover transitions, glow blobs, custom scrollbars

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/workhub-ems.git
cd workhub-ems

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🔐 Demo Credentials

| Role     | Email                   | Password   |
|----------|-------------------------|------------|
| Admin    | admin@company.com       | admin123   |
| Employee | arjun@company.com       | arjun123   |
| Employee | sneha@company.com       | sneha123   |
| Employee | ravi@company.com        | ravi123    |
| Employee | priya@company.com       | priya123   |
| Employee | karan@company.com       | karan123   |

> 💡 Or register a brand new employee account directly from the login page.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx           # Sign in + register tabs
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx  # Admin layout
│   │   └── EmployeeDashboard.jsx
│   ├── other/
│   │   ├── Header.jsx          # Top bar with greeting & logout
│   │   ├── CreateTask.jsx      # Admin task-assignment form
│   │   ├── AllTask.jsx         # Team overview table
│   │   └── TaskListNumbers.jsx # Stat cards
│   └── TaskList/
│       ├── TaskList.jsx        # Renders the task card board
│       ├── NewTask.jsx         # Blue — awaiting acceptance
│       ├── AcceptTask.jsx      # Amber — in progress
│       ├── CompleteTask.jsx    # Cream — done
│       └── FailedTask.jsx      # Red — failed
├── context/
│   └── AuthProvider.jsx        # Global employee data context
├── utils/
│   └── localStorage.jsx        # Seed data, getters, registerEmployee()
├── App.jsx                     # Route logic (login / admin / employee)
└── index.css                   # Tailwind base + CSS variables
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                        |
|----------------|--------------------------------|
| React 18       | UI & component tree            |
| Vite           | Build tool & dev server        |
| Tailwind CSS 3 | Utility-first styling          |
| Context API    | Global state (employee data)   |
| localStorage   | Persistence (no backend)       |
| Google Fonts   | Outfit typeface                |

---

## 🔮 Roadmap / Improvements

- [ ] Wire up task action buttons (Accept / Complete / Failed) to actually mutate state
- [ ] Admin can edit or delete assigned tasks
- [ ] Search and filter on the task board
- [ ] Toast/snackbar notification system
- [ ] Employee profile page (update role, department, avatar)
- [ ] Password hashing (even client-side, e.g. `bcryptjs`)
- [ ] Responsive / mobile layout
- [ ] Unit tests with Vitest + React Testing Library

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">
  Made with 💜 using React + Tailwind CSS
</div>
