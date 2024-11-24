# Personal Blog Platform task


---

## Features

### Backend
- **User Authentication**: Secure sign-up and login with JWT-based authentication.
- **API Endpoints**:
  - `POST /signup`: Register a new user.
  - `POST /login`: Authenticate a user and return a session token.
  - `POST /post`: Create a new article (authenticated users only).
  - `GET /posts`: Retrieve all posts.
  - `GET /posts?author=userId`: Retrieve posts by a specific author.
- **Data Models**:
  - User: `id`, `email`, `passwordHash`
  - Post: `id`, `title`, `content`, `authorId`, `createdAt`
- Passwords stored securely using hashing.

### Frontend
- **Pages**:
  - `/`: Homepage displaying all posts.
  - `/login`: Login page.
  - `/signup`: Sign-up page.
  - `/dashboard`: Private dashboard for creating and managing user posts.
- **Client-Side Routing** for seamless navigation.
- **Server-Side Rendering (SSR)** for the homepage.
- **Static Generation** for individual blog posts (where applicable).
- **Responsive Design** with clean UI using CSS Modules.

---

## Installation and Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB (or your preferred database)

### Clone the Repository
```
git clone https://github.com/your-username/personal-blog-platform.git
cd personal-blog-platform
```
Backend Setup

	1.	Navigate to the backend directory:
```
cd backend
```

	2.	Install dependencies:
```
npm install

```
	3.	Create a .env file and configure the following environment variables:
```
PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_secret_key
```

	4.	Start the backend server:
```
npm start

```

Frontend Setup

	1.	Navigate to the frontend directory:
```
cd frontend
```

	2.	Install dependencies:
```
npm install
```

	3.	Start the development server:
```
npm run dev

```
	4.	Access the application at http://localhost:3000.

Project Structure

Backend

	•	/routes: Contains API routes for user authentication and blog posts.
	•	/models: Mongoose models for User and Post.
	•	/controllers: Business logic for handling API requests.
	•	server.js: Entry point for the Express application.

Frontend

	•	/pages: All Next.js pages (e.g., homepage, login, signup, dashboard).
	•	/components: Reusable React components.
	•	/styles: CSS modules for styling.
	•	/utils: Helper functions for API calls and authentication.

Technologies Used

	•	Backend: Node.js, Express, MongoDB, JWT, bcrypt
	•	Frontend: Next.js 14, TypeScript, React, CSS Modules

Key Decisions

	•	JWT Authentication: Provides a secure and scalable method for session management.
	•	Next.js Features: Server-Side Rendering (SSR) for SEO-friendly and fast loading times; Static Generation for performance optimization.
	•	Responsive UI: Ensures accessibility across different devices.

Commands

Backend

	•	Start server:
```
npm start
```


Frontend

	•	Start development server:
```
npm run dev
```
Security Considerations

	•	Passwords are hashed before storage using bcrypt.
	•	Sensitive data is protected using .env configuration.
	•	Authentication middleware ensures protected routes.

