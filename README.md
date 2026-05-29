Student Application System

A Full Stack Student Application Management System developed using React, Spring Boot, MySQL, and REST API architecture.

Features
Student Registration Form
Admin Login Page
Admin Dashboard
Store Student Data in MySQL Database
REST API Integration
Responsive UI Design
Separate Frontend and Backend Architecture
Technologies Used
Frontend
React JS
Vite
React Router DOM
Axios
CSS3
Backend
Java
Spring Boot
Spring Data JPA
Maven
Database
MySQL
Tools
VS Code
Git
GitHub
Postman
Project Structure
student-application-system
│
├── frontend
│
├── backend
│
└── README.md
Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
Backend Setup
cd backend
mvn spring-boot:run

Backend runs on:

http://localhost:8080
API Endpoints
Add Student
POST /students
Get All Students
GET /students
Database Configuration

Update application.properties file:

spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=yourpassword
Future Improvements
JWT Authentication
Role-Based Admin Access
Email Notifications
File Upload Feature
Export Student Data to Excel/PDF
Author
Jayanthan JK

GitHub:
https://github.com/JayanthanJK
