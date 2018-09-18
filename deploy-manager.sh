#!/bin/sh
{
  docker service rm blog-front
}
{
  docker rmi -f blog-front:latest
}
{
  docker system prune -f
}

docker load < blog-front.tar
docker service create --name blog-front --replicas 2 --publish 80:80 blog-front:latest
