FROM node:14.15.3-alpine as builder
WORKDIR /frontend

COPY package*.json ./
RUN npm ci
ENV NODE_ENV=production
ENV PORT=80
ENV HOST 0.0.0.0
ENV APP_ROOT /frontend

COPY . ./
RUN npm run build

FROM node:14.15.3-alpine
ENV NODE_ENV=production
ENV PORT=80
ENV HOST 0.0.0.0
ENV APP_ROOT /frontend

WORKDIR /frontend
COPY . ./
RUN npm i
COPY --from=builder /frontend/dist /frontend/dist

CMD npm start