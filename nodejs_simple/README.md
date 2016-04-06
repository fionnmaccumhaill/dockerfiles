Dockerfile

A simple Dockerfile for node.js based on the official node.js image on dockerhub.com:

https://hub.docker.com/_/node/

Build this Dockerfile with this command (replacing node_image_name with the name you want to give the image):

docker build -t node_image_name .

Once you have built the docker node.js image then use this command to start the container:

docker run -it --rm --name my_node_script -v "$PWD":/usr/src/app -w /usr/src/app node_image_name

The node_image_name is the same name you gave the image in the build command.

This will start a container running node.js, copy the contents of the current directory into the container at /usr/src/app and run the index.js script

Upon completion of the script the container is removed from the docker host.