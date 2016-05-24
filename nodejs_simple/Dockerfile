# Dockerizing node.js: Dockerfile for building a node.js instance
# This is a generic Dockerfile that will run index.js in the working
# directory.
# To build using this Dockerfile:
# docker build -t dockertest_image .
#
# To run using the image created by the build (all on a single line):
# docker run -it --rm --name some_container_name 
# -v "$PWD":/usr/src/app -w /usr/src/app dockertest_image

# The run command maps the current directory on the host to /usr/src/app
# When the index.js app is done running it removes the docker container

FROM       node:6.2-wheezy
MAINTAINER Me

# Expose port #8888 to other apps (use in conjunction with the -p flag)
EXPOSE 8888

RUN rm /usr/sbin/policy-rc.d

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

CMD ["node", "index.js"]