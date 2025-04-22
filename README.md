# FSTask-04-25

This codebase is for the following:

- `backend` - A NestJS typescript api that has one endpoint `/projects` which returns all projects from the database (which is a file)
- `frontend` - A React typescript web app that shows a table with the data returned from the `/projects` endpoint

## Tech Stack

- Backend: NestJS (TypeScript), SQLite, TypeORM
- Frontend: React (Vite + TypeScript), Axios
- Tooling: Docker

## Running Locally

You can build the images using:

```
docker compose build
```

and run the containers with:

```
docker compose up
```

With the containers running:

- The backend API will be running at `http://localhost:3000`
- The frontend App will be running at `http://localhost:5173`

## Developing

For developing purposes, open two different terminals and from `FSTask-04-25`:

### Frontend

```
cd frontend
npm run dev
```

### Backend

```
cd backend
npm run start:dev
```

## Features

- Displays a table of carbon credit projects including their ID, URL, status, and country.
- Fully typed data flow from backend to frontend using TypeScript interfaces.
- Clean and minimal UI for easy readability and quick comprehension.

## If I had more time...

- **Table Functionality**: Allow users to explore data more through the use of filters, sorting, and grouping
- **Pagination**: This would be added to the `/projects` route and the app for requesting data if there is a large amount in the future
- **Error Handling**: Adding an `ErrorBoundary` and other user friendly messages
- **Testing**: Unit tests for backend and frontend
- **Docker Development**: Allow for the containers to be running but modify so that hot reloading works for both frontend and backend

## Bonus Loom Summary

https://www.loom.com/share/1830a4675e674970b8ec6fe16b61bbd4?sid=f63f2920-2833-404c-89be-92a3e3461d9e
