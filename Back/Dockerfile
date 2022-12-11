# Sets the base image of the application to the node’s official image.
FROM node:16

# Sets the Working Directory as "/app"
WORKDIR /app
# Copies the package.json file into "/app" and runs npm i
COPY package.json /app
RUN npm i
# Copies the entire source code into "/app"
COPY . /app

# Specifies the port the node app will be running on
EXPOSE 5000

# Runs "node server.js" after the above step is completed
CMD ["node", "server.js"]