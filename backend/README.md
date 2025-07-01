# Food Delivery Backend

## Setup Instructions

1. Create a `.env` file in the backend directory with the following content:
```
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydb"
```

2. Start the services using Docker Compose:
```bash
docker compose up -d
```

This will:
- Start the PostgreSQL database
- Build and run the backend service

3. Access the application:
- Backend API: http://localhost:3001
- Database: PostgreSQL running on port 5432

## Development

To stop the services:
```bash
docker compose down
```

To rebuild and restart the services:
```bash
docker compose up -d --build
```

## Environment Variables

The following environment variables are required:
- `DATABASE_URL`: PostgreSQL connection string

Note: The `.env` file is gitignored for security reasons. Make sure to create your own `.env` file with your desired database credentials.

## Swagger Docs

The Swagger documentation for the API is available at http://localhost:3001/api

