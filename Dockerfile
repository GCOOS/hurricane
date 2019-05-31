FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
COPY ./ /usr/src/app
WORKDIR /usr/src/app

ONBUILD RUN npm install
ONBUILD RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "start"]