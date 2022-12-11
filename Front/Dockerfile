# Official node image
FROM node:16
# Setting the working directory to "/app"
WORKDIR /app

# Copies the package.json file into "/app" and run npm i
COPY package.json /app
RUN npm install
# Copies the entire react source code into "/app"
COPY . /app

EXPOSE 3000
# Starting the react app
CMD [ "npm", "start"]