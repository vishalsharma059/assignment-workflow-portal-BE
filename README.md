# 📘 Assignment Workflow Portal – Backend

A workflow-driven backend built with **Node.js, Express.js, and MongoDB**, designed to handle authentication, role-based access control, and assignment lifecycle management for teachers and students.

---

## 🚀 Project Overview

This repository contains the **backend service** of the Assignment Workflow Portal.

The backend is responsible for handling **secure authentication**, **role-based authorization**, and **assignment workflows**, ensuring the system behaves like a real-world academic platform rather than simple CRUD APIs.

---

## ✨ Core Responsibilities

- User authentication for Teachers and Students  
- Role-based access control (RBAC)  
- Assignment lifecycle management:
  - Draft → Published → Completed  
- Student assignment submissions  
- Secure API communication using JWT  

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  
- bcrypt (Password Hashing)  
- RESTful APIs  

---

## ⚙️ Setup & Run Locally

```bash
git clone https://github.com/your-username/assignment-workflow-portal-backend.git
cd assignment-workflow-portal-backend
npm install

Create a .env file in the root directory and add:

PORT=8800
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


⚠️ Ensure MongoDB is running locally or use MongoDB Atlas.

Start the server:

npm start


For development mode:

npm run dev


The backend server runs on:
http://localhost:8800

```

## 🔐 API Features

### Authentication
- Single login endpoint for Teachers and Students  
- Returns JWT token and user role  
- Secure password hashing using bcrypt  
- Role-based route protection via middleware  

### 👨‍🏫 Teacher Capabilities
- Create assignments (Draft state)  
- Publish assignments  
- View student submissions  
- Mark assignments as Completed  

### 👨‍🎓 Student Capabilities
- View only Published assignments  
- Submit one answer per assignment  
- View submitted answers (read-only)  

---

## 🧠 Assumptions & Notes

- Users (Teachers / Students) are pre-created or seeded  
- Students cannot edit submissions after submitting  
- Teachers cannot delete assignments once published  
- Assignment submission is blocked after the due date (if implemented)  
- All sensitive routes are protected using JWT middleware  

---

## 📎 Additional Notes

- Focus is on workflow and access control, not UI  
- APIs follow REST best practices  
- Input validation is handled on both backend and frontend  
- Designed to scale for analytics, notifications, and admin roles  

---

## 🙋‍♂️ Author

**Vishal Sharma**  
Full Stack MERN Developer  

🔗 LinkedIn: https://www.linkedin.com/in/vishalsharma2003  

⭐ If this backend helps you, please consider giving it a star!
