# Threads-App

A full-stack social media application inspired by Threads, built with Node.js (Express) for the backend and React (Vite) for the frontend.

## Features
- User authentication (signup, login, logout)
- Create, read, update, and delete posts
- Comment on posts
- Like and interact with posts
- User profiles and profile updates

## Project Structure
```
Threads-App/
  backend/    # Node.js + Express API
  frontend/   # React + Vite frontend


## Backend Details 

The backend is a RESTful API built with **Node.js** and **Express**. It handles authentication, user management, posts, comments,Like and interact with posts. MongoDB is used as the database, managed via Mongoose.

### Main Dependencies
- express: Web framework for Node.js
- mongoose: MongoDB object modeling
- jsonwebtoken: JWT authentication
- bcryptjs: Password hashing
- dotenv: Environment variable management
- cloudinary: Image upload and management
- cookie-parser: Cookie parsing for authentication

### Dev Dependencies
- nodemon: Auto-restart server during development

### Main Scripts
- `npm start` — Start the server
- `npm run dev` — Start the server with nodemon for development

### Folder Structure
- `controllers/` — Route logic for users, posts, messages
- `models/` — Mongoose schemas for users, posts, messages, conversations
- `routes/` — API endpoints for users, posts, messages
- `middlewares/` — Custom middleware (e.g., authentication)
- `db/` — Database connection logic
- `utils/` — Helper functions (e.g., token generation)

---
## Frontend Details

The frontend is a Single Page Application (SPA) built with **React** and **Vite**. It provides a modern, responsive UI for all social features, including authentication, posting, commenting, chat, and profile management.

### Main Dependencies
- react: UI library
- react-dom: DOM bindings for React
- react-router-dom: Routing for SPA navigation
- @chakra-ui/react: UI component library
- @chakra-ui/icons: Icon set for Chakra UI
- @emotion/react, @emotion/styled: Styling for Chakra UI
- recoil: State management
- date-fns: Date formatting
- framer-motion: Animations
- react-icons: Icon library

### Dev Dependencies
- vite: Frontend build tool
- @vitejs/plugin-react: React plugin for Vite
- eslint: Linting
- eslint-plugin-react: React linting rules
- @types/react, @types/react-dom: TypeScript types (if used)

### Main Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint the codebase

### Folder Structure
- `src/` — Main source code
   - `components/` — Reusable UI components
   - `pages/` — Page-level components (routes)
   - `atoms/` — Recoil state atoms
   - `hooks/` — Custom React hooks
- `public/` — Static assets

---
```

## Getting Started

### Backend
1. Navigate to the backend folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the frontend folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
