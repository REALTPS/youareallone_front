FROM node:10 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn install
RUN yarn build



FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]