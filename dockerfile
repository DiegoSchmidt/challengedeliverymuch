FROM node:12

# Cria diretorio da aplicacao
WORKDIR /usr/src/app

# Copia arquivo de pacotes necessarios
COPY package*.json ./

#Instala as dependencias
RUN npm install

# If you are building your code for production
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
