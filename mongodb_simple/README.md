Dockerfile

A simple Dockerfile for MongoDB based on the official MongoDB image on dockerhub.com:

https://hub.docker.com/_/mongo/

Build this Dockerfile with this command (replacing mongo image name with the name you want to give the image):

docker build -t mongo_image_name .

Once you have built the docker MongoDB image then use this command to start the container:

docker run --name some_mongo_name -i -t mongo_image_name

The mongo_image_name is the same name you gave the image in the build command.

This will start a container running MongoDB on port 27017.