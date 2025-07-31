# Express MongoDB CRUD App

A simple full-stack CRUD (Create, Read, Update, Delete) web application built using **Node.js**, **Express.js**, and **MongoDB**.

This project follows the tutorial by [Dipesh Malvia](https://www.youtube.com/watch?v=H9M02of22z4) to demonstrate basic backend development with Express and MongoDB, making it perfect for beginners who want to understand RESTful API fundamentals.

## 🚀 Features

- Create new records (POST)
- Retrieve all or specific records (GET)
- Update records by ID (PUT)
- Delete records by ID (DELETE)
- Use of `mongoose` for MongoDB object modeling
- Organized folder structure
- `.env` file for environment variables

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Dotenv
- Nodemon (for development)

## 📁 Project Structure

project/
│
├── models/
│ └── Item.js # Mongoose schema/model
│
├── routes/
│ └── itemRoutes.js # API routes
│
├── .env # Environment variables (e.g., Mongo URI)
├── app.js # Main server entry point
├── package.json
└── README.md

bash
Salin
Edit

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies

npm install


3. Setup your .env file


env

PORT=3003
CONNECTION_STRING=your_mongodb_connection_string
4. Start the development server

npm run dev


🙋‍♂️ Author
Bayu Trihardian Syah
Based on Dipesh Malvia's tutorial

