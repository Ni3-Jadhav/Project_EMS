# EMS (Employee Management System) — React + Vite

This repository contains a small Employee Management System (EMS) built with React and Vite. It is a single‑page application that demonstrates role-based views (Admin / Employee), local persistence using browser `localStorage`, task creation, task lists, task status updates, and an admin preview mode.

Live demo: https://ems-ni3.netlify.app/login

## Features
- Admin and Employee roles with simple authentication (seeded in localStorage)
- Admin: create tasks and assign to employees, view all employees' in-progress tasks
- Employee: view personal dashboard, task counts and details, update task status
- Data persisted in browser `localStorage` via utility helpers
- Built with React, React Router, and Material UI

## Tech stack
- React 19
- Vite
- Material UI (MUI)
- React Router

## Prerequisites
- Node.js 18+ and npm installed

## Local Setup
1. Clone the repository and change into the project folder.

```bash
git clone <https://github.com/Ni3-Jadhav/Project_EMS.git>
cd Project_ems
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server (hot-reload):

```bash
npm run dev
```

The app will open at the URL shown in the terminal (usually http://localhost:5173).

## Available npm scripts
The project `package.json` provides these scripts:

- `npm run dev` — start Vite development server
- `npm run build` — build production bundle
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint

## Build for production

```bash
npm run build
npm run preview    # to preview the built app locally
```

## How to use the app
1. On first run the app seeds `localStorage` with demo admin/user data (handled by `src/utils/LocalStorage.jsx`).
2. Visit `/login` and sign in as an admin or employee. Example seeded credentials:

- Admin: `admin@gmail.com` / `admin@123`
- Employee examples (email / password): `nayan.shinde@gmail.com` / `user@123`

3. As Admin you can:
- Create tasks via the Create Task form and assign them to employees.
- Click employee cards to preview their dashboard (`/admin/employee/:id`).

4. As Employee you can:
- View task counts and task cards
- Click a task to open details and change its status (New / In Progress / Completed / Pending / Failed Task).

## Important files and flow
- `src/main.jsx` — app entry, wraps app with `AuthProvider`.
- `src/context/AuthProvider.jsx` — provides `AuthContext`, initializes and refreshes user data from `localStorage`.
- `src/utils/LocalStorage.jsx` — seeded demo data and helper functions: `setLocalStorage()`, `getLocalStorage()`, `addTaskToEmployee()`, `updateTaskStatus()`.
- `src/App.jsx` — routing, session restore, `handleLogin()` and protected routes.
- `src/pages/Auth/LoginUser.jsx` — login form and validation.
- `src/pages/DashBoard/*` and `src/components/*` — dashboards, header, task cards, create task UI.

Refer to [src/main.jsx](src/main.jsx#L1) and [src/context/AuthProvider.jsx](src/context/AuthProvider.jsx#L1) for startup flow.




