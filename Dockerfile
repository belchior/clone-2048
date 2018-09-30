FROM node:alpine as dependencies

WORKDIR /app

COPY package* ./
RUN ["npm", "ci"]

COPY . ./
ENV CI=true
RUN ["npm", "test"]
RUN ["npm", "run", "build"]

# build image
# sudo docker build . -t clonei
# create container
# docker run --name clone -d -p 3000:80 clonei
FROM nginx:alpine

ENV nginx_root=/usr/share/nginx/html/

WORKDIR $nginx_root/clone-2048

COPY --from=dependencies /app/build/ ./
RUN mv ./index.html $nginx_root

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
