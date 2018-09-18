#!/bin/sh
{
  docker rmi -f blog-front:latest
}
{
  docker system prune -f
}

docker load < blog-front.tar
