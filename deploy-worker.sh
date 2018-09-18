#!/bin/sh
{
  docker rmi -f blog-front:latest
}
{
  docker system prune -y
}

docker load < blog-front.tar
