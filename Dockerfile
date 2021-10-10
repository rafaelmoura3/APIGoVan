# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-slim

# Create and change to the app directory.
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# Copying this first prevents re-running yarn install on every code change.
COPY package.json yarn.lock ./

# Install production dependencies.
RUN yarn install --only=production

# Copy local code to the container image.
COPY . .

# Enviroment variable
ENV PORT=3000

# Expose port
EXPOSE 3000

# Run the web service on container startup.
CMD [ "yarn", "dev" ]

# Build this container with `docker build -t <username>/<app_name> .`
# Run this container with `docker run -p 3000:3000 -d <username>/<app_name> .`
# Push this docker image to whatever HUB you like.

# TODO add VOLUME for log files
# TODO add MongoDB config