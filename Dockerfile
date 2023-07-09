#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
EXPOSE 4200

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular /usr/share/nginx/html
