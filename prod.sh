#!/bin/sh
docker build -t tr_client_production -f Dockerfile.prod .
docker tag tr_client_production judis/app.l11n.client
docker push judis/app.l11n.client