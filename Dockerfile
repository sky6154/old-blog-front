FROM nginx:1.13.9-alpine
MAINTAINER <sky6154@gmail.com>

COPY ./build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
