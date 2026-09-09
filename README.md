# Task Management Application

## Tech Stack

- Frontend: React (TypeScript), Tailwind CSS

- Backend: Node.js, Express (TypeScript)

- Database: In-Memory Storage

- Infrastructure: Docker, Docker Compose

## How To Run

### Using Docker (production)

1. Have Docker or Docker Desktop installed in your system
2. Execute this command in the root project directory

   ```bash
   docker compose up --build
   ```

3. Visit http://localhost:8080/

### Using NPM (development)

1. Have NPM installed in your system
2. Start Backend:

   ```bash
   cd backend
   npm i
   npm run build
   npm run start
   ```

3. Start Frontend:

   ```bash
   cd frontend
   npm i
   npm run dev
   ```

4. Visit http://localhost:5173/
