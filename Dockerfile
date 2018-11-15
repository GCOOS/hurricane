FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install

# Build app
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 8001

CMD ["npm","run","start"]
