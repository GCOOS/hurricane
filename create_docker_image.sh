npm run build
docker-compose down
docker build -t skobara/hurricane . --force-rm
docker-compose up -d
