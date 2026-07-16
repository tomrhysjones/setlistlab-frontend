# 🎸 SetlistLab

A full-stack MERN application that helps musicians organise songs and build reusable setlists for live performances.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 🌐 Live Demo

**Frontend**

https://setlistlab-frontend-8e968661be01.herokuapp.com/

**Backend Repository**

https://github.com/tomrhysjones/setlistlab-backend

## 🔐 Authentication

Users register and log in through dedicated authentication routes. Passwords are hashed using bcrypt, and protected API routes require a valid JSON Web Token.

Each user can access and manage only their own songs and setlists.

---

## 📖 Overview

SetlistLab is a full-stack MERN application that enables musicians to organise songs and create reusable live performance setlists.

Built with React on the frontend and a Node.js/Express REST API backed by MongoDB, the application provides secure authentication and full CRUD functionality for managing songs and setlists.

---

## ✨ Features

- Secure user authentication
- Create, edit and delete songs
- Create, edit and delete setlists
- Add songs to setlists
- Remove songs from setlists
- Responsive interface
- RESTful API integration

---

## 🛠 Tech Stack

## 🔐 Authentication

The React client supports user registration, login and persistent authentication. Protected requests include a JSON Web Token when communicating with the backend API.

### Frontend

- React
- Vite
- React Router
- Context API
- Fetch API
- CSS

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

---

## 📸 Screenshots

### Login

<img width="649" height="701" alt="login" src="https://github.com/user-attachments/assets/ca51e147-a2e6-4469-b5c9-26347281149c" />


### Dashboard

<img width="958" height="934" alt="Dashboard UI" src="https://github.com/user-attachments/assets/788077f1-c895-41cd-8776-3743f4b9d235" />


### Songs

<img width="828" height="380" alt="songs" src="https://github.com/user-attachments/assets/7c89805a-c5e2-46a4-90ed-5c8fbcee2406" />


### Create Setlist

<img width="831" height="249" alt="create setlist" src="https://github.com/user-attachments/assets/24e06b8b-0a22-445b-a728-db5806ed3211" />


### Setlists

<img width="822" height="310" alt="setlists" src="https://github.com/user-attachments/assets/c76c9fa5-1c49-4d45-98cd-277f69c24064" />


### Setlist Details

<img width="828" height="493" alt="setlist number" src="https://github.com/user-attachments/assets/01dd127a-85c0-4e72-8042-e944ad01b9b7" />


---

## 🚀 Installation

```bash
git clone https://github.com/tomrhysjones/setlistlab-frontend.git
cd setlistlab-frontend
npm install
npm run dev

---

## 📈 Future Improvements

- Drag-and-drop song ordering
- Search songs
- Search setlists
- Dark mode
- Printable setlists
- Export to PDF

---

## 👨‍💻 Author

**Tom Rhys Jones**

- GitHub: https://github.com/tomrhysjones
- LinkedIn: https://www.linkedin.com/in/tom-rhys-jones-63b553209/
