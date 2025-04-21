FROM node:23.11.0-slim AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install


FROM base AS development

WORKDIR /app
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
