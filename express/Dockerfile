# use an offical image of node.js run time
FROM node:22-alpine

#set the working directory inside  the container
WORKDIR  /app

# copy all package.json files  in the working directory 

COPY package*.json ./


#install depdencies
RUN npm install

COPY  . .

ENV PORT 3000


CMD [ "node","index.js" ]