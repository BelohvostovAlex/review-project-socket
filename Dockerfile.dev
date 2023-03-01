FROM node:19-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . . 

EXPOSE 7000

CMD ["npm", "run", "start"]