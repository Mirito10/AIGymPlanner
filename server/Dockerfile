# Usar Node 20 Alpine
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y lock
COPY package*.json ./

# Instalar todas las dependencias (incluyendo dev, porque tsx está en devDependencies)
RUN npm install --legacy-peer-deps

# Copiar todo el código
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando por defecto para arrancar tu servidor TS directamente con tsx hjola
CMD ["npm", "run", "dev:server"]
