docker-compose down
npm run build
docker build -t skobara/hurricane . --force-rm
docker-compose up -d
