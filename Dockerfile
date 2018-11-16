FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app

ONBUILD RUN npm install
ONBUILD RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 8001

CMD ["npm", "run", "generate"]
#CMD ["npm", "run", "start"]

# based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY ./dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN chmod 644 *
EXPOSE 80