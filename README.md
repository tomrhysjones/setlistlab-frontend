# SetlistLab — Frontend

Frontend for **SetlistLab**, a MERN stack application that helps performers manage songs and build live performance setlists.

## 🚀 Live Overview
SetlistLab allows users to:
- Create songs
- Create setlists
- Add songs to setlists
- Remove songs from setlists
- Delete songs
- Delete setlists
- Manage everything in a clean dashboard UI

## 🧱 Tech Stack
- React (Vite)
- JavaScript (ES6+)
- Context API (Auth state)
- CSS Grid + Flexbox
- Fetch API
- JWT Authentication

## 🔐 Features
- Secure login system
- Persistent authentication (JWT + localStorage)
- Protected API routes
- Real-time UI updates after actions
- Responsive layout

## 🖥️ Key Components
- Dashboard
- SongForm
- SetlistForm
- SongList
- SetlistList
- SetlistDetail
- AuthContext

## 🔌 API Integration
Connects to backend REST API:
- Songs CRUD
- Setlists CRUD
- Add/remove songs from setlists
- Auth endpoints

## Application Screenshot

![Dashboard UI](./docs/dashboard-ui.png)

## 🧪 Development
```bash
npm install
npm run dev

## Runs on:

http://localhost:5173