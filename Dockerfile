FROM node:latest

WORKDIR /src

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run compile
RUN npm run gen:proto


EXPOSE 9090
EXPOSE 50053


CMD ["npm", "run", "serve"]



