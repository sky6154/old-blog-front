#!/bin/sh
{
  docker rmi -f blog-front:latest
}

docker load < blog-front.tar
