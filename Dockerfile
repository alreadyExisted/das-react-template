FROM node:alpine AS build

WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.17.0-alpine AS final
RUN rm -rf /usr/share/nginx/html
COPY --from=build /src/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY Docker-entrypoint.sh /etc

CMD /bin/sh /etc/Docker-entrypoint.sh && nginx -g "daemon off;"
