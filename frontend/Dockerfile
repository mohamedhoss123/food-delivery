FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm \
  && pnpm install --prefer-offline

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
