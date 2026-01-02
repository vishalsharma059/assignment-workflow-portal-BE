📌 Project Overview

This repository contains the backend of the Assignment Workflow Portal, built using Node.js, Express.js, and MongoDB.

The backend handles:

User authentication (Teacher & Student)

Role-based access control

Assignment lifecycle management (Draft → Published → Completed)

Student assignment submissions

Secure API communication using JWT

The system ensures a workflow-driven design, not just basic CRUD operations.

🛠️ Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt (password hashing)

RESTful APIs

⚙️ Setup & Run Locally
1️⃣ Clone the Repository
git clone https://github.com/your-username/assignment-workflow-portal-backend.git
cd assignment-workflow-portal-backend

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env file in the root directory:

PORT=8800
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


⚠️ Make sure MongoDB is running locally or use MongoDB Atlas.

4️⃣ Start the Server
npm start


or (for development)

npm run dev


The backend server will run on:

http://localhost:8800

🔐 API Features
Authentication

Single login endpoint for teachers and students

Returns JWT token + user role

Role-based route protection using middleware

Teacher Capabilities

Create assignments (Draft state)

Publish assignments

View student submissions

Mark assignments as Completed

Student Capabilities

View only Published assignments

Submit one answer per assignment

View submitted answers (read-only)

🧠 Assumptions & Notes

Users (teachers/students) are pre-created or seeded.

Students cannot edit submissions once submitted.

Teachers cannot delete assignments after publishing.

Assignment submission is blocked after the due date (if implemented).

All sensitive routes are protected using JWT middleware.

📎 Additional Notes

Focus is on workflow and access control, not UI.

APIs follow REST best practices.

Input validation is handled both server-side and client-side.

