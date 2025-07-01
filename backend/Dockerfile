# Use official Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app
# Set up pnpm
RUN npm install -g pnpm 
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the backend source code
COPY . .
RUN npx prisma generate
# Build the NestJS app
CMD [ "pnpm", "start:dev" ]
