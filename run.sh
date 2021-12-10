#!/bin/sh
# chmod a+x runDocker.sh

PUBLIC_URL=. yarn run build
docker stop app
docker rm app
docker rmi app
docker build -t app .
docker run -d -p 3000:80 --name app --restart unless-stopped app
