FROM node:latest
WORKDIR /usr/src/app
COPY . ./talisman/
RUN cd talisman && npm install && npm run build

FROM nginx:1.19.2
COPY --from=0 /usr/src/app/talisman/build /usr/share/nginx/html
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'