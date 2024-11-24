
# Task Attack Capital


## Features

- **User Authentication**:
  - Secure signup and login with JWT-based authentication.
  - Passwords are securely hashed using industry standards.
- **Task Management**:
  - Create, update, delete, and view tasks.
  - Tasks linked to individual users for personalization.
- **API-Driven Backend**:
  - RESTful API endpoints for seamless integration.
- **Responsive Design**:
  - A clean, user-friendly interface designed with **Tailwind CSS**.
- **Scalable Architecture**:
  - Structured for easy scalability and future enhancements.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: [Add deployment details if applicable]

---

## File Structure

### Backend (`/backend`)

The backend directory contains all server-side code, including the API, database models, controllers, and authentication logic.

backend
├── config
│   └── db.js               # MongoDB connection setup
├── controllers
│   ├── authController.js   # Authentication-related logic
│   ├── taskController.js   # Task CRUD operations
├── middleware
│   ├── authMiddleware.js   # JWT authentication middleware
├── models
│   ├── Task.js             # Task schema definition
│   ├── User.js             # User schema definition
├── routes
│   ├── authRoutes.js       # Authentication routes
│   ├── taskRoutes.js       # Task-related routes
├── utils
│   ├── errorHandler.js     # Custom error handler
├── server.js               # Entry point for the backend server
└── .env                    # Environment variables (not included in repo)

### Frontend (`/frontend`)

The frontend directory houses the client-side application built with React and styled using Tailwind CSS.

frontend
├── public
│   ├── index.html          # Main HTML file
├── src
│   ├── components
│   │   ├── AuthForm.js     # Login and signup forms
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── TaskItem.js     # Single task component
│   ├── pages
│   │   ├── Home.js         # Home page showing tasks
│   │   ├── Login.js        # Login page
│   │   ├── Signup.js       # Signup page
│   │   ├── Dashboard.js    # User dashboard for task management
│   ├── services
│   │   ├── api.js          # API calls for tasks and auth
│   ├── styles
│   │   ├── globals.css     # Global styles
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for React app
│   ├── .env.local          # Frontend environment variables (not included in repo)

---

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or later)
- MongoDB (local or hosted instance)

### Steps to Run Locally

#### Clone the Repository

git clone https://github.com/anujsb/task-attack-capital.git
cd task-attack-capital

Backend Setup

	1.	Navigate to the backend directory:

cd backend


	2.	Install dependencies:

npm install


	3.	Create a .env file in the backend directory with the following variables:

PORT=5000
DATABASE_URL=mongodb://localhost:27017/task-attack
JWT_SECRET=your_jwt_secret


	4.	Start the backend server:

npm run dev



Frontend Setup

	1.	Navigate to the frontend directory:

cd ../frontend


	2.	Install dependencies:

npm install


	3.	Create a .env.local file in the frontend directory:

REACT_APP_API_URL=http://localhost:5000


	4.	Start the frontend server:

npm start

API Endpoints

Authentication

	•	POST /api/auth/signup: Register a new user.
	•	POST /api/auth/login: Authenticate a user and return a token.

Tasks

	•	GET /api/tasks: Retrieve all tasks for the logged-in user.
	•	POST /api/tasks: Create a new task.
	•	PUT /api/tasks/:id: Update a task by ID.
	•	DELETE /api/tasks/:id: Delete a task by ID.

Future Improvements

	•	Advanced Features:
	•	Add reminders for tasks.
	•	Enable task prioritization and categorization.
	•	UI Enhancements:
	•	Improve styling and add animations.
	•	Testing:
	•	Add unit and integration tests for both frontend and backend.

License

This project is licensed under the MIT License.
