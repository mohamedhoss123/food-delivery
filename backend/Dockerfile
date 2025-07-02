# Use official Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app
# Set up pnpm
RUN npm install -g pnpm 
# COPY ./package.json ./pnpm-lock.yaml ./

# Copy the rest of the backend source code
COPY . .
RUN pnpm install --frozen-lockfile
RUN npx prisma generate
# Build the NestJS app
CMD [ "pnpm", "start:dev" ]
