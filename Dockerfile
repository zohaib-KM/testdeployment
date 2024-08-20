FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Option 1: Use npm ci
# RUN npm ci --prefer-offline --no-audit --no-fund

# Option 2: Clear cache before npm install
RUN npm cache clean --force && npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
