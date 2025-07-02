FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm 
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile


COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
