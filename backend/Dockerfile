# Use official Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only lock and manifest files first for better layer caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Start development server
CMD [ "pnpm", "start:dev" ]
