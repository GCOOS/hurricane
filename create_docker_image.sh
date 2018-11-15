npm run build
docker-compose down
docker build -t gcoos/hurricane . --force-rm
docker-compose up -d
