#!/bin/sh
{
  docker service rm blog-front
}
{
  docker rmi blog-front:latest
}

docker load < blog-front.tar
service create --name blog-front --replicas 3 --publish 80:80 blog-front:latest
