#!/bin/sh
{
  docker rmi -f blog-front:latest
}
{
  docker system prune
}

docker load < blog-front.tar
