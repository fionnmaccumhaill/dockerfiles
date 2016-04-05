# Dockerizing MongoDB: Dockerfile for building MongoDB images
# Based on ubuntu:latest, installs MongoDB following the instructions from:
# http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

FROM       mongo:latest
MAINTAINER Mongo

RUN apt-get update

# Create the MongoDB data directory
RUN mkdir -p /data/db

# Expose port #27017 from the container to the host
EXPOSE 27017

# CMD ["--port 27017"]

RUN rm /usr/sbin/policy-rc.d

# Set /usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]