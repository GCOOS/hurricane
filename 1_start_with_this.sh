npm run build
#npm run generate
docker-compose down
docker build -t skobara/hurricane . --force-rm
docker-compose up -d
