FROM node:23.11.0-slim AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

FROM base AS development

WORKDIR /app
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:dev"]
