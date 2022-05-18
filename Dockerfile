FROM node:16.13.2-alpine as builder
WORKDIR /frontend

COPY package*.json ./
RUN npm ci
ENV NODE_ENV=production
ENV PORT=80
ENV HOST 0.0.0.0
ENV APP_ROOT /frontend

COPY . ./
RUN npm run build

FROM node:16.13.2-alpine
ENV NODE_ENV=production
ENV PORT=80
ENV HOST 0.0.0.0
ENV APP_ROOT /frontend

WORKDIR /frontend
COPY package*.json ./
RUN npm i
COPY --from=builder /frontend/dist /frontend/dist
COPY --from=builder /frontend/server/index.js .server/index.js

CMD npm start