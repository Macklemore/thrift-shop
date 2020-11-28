FROM node:10.23.0

# App directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]