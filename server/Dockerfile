FROM node:10.23.0

# App directory
WORKDIR /usr/src/server

# Install dependencies
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV NODE_ENV="production"

CMD ["node", "server/server.js"]