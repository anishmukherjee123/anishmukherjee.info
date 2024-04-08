# Referenced from this article: https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e

FROM node:21-alpine3.18 as builder

WORKDIR /website/
# copy cache and dependency locks
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.25.4-alpine
COPY --from=builder /website/dist /usr/share/nginx/html
# Override default nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]