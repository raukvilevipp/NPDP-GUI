FROM node:16

# Set working directory for the rest of the Dockerfile
WORKDIR /usr/src/app

# Install dependencies
#COPY package*.json ./
#RUN npm install

# Copy the source code
COPY ./src .

# Expose port
EXPOSE 3000

# Run it
CMD [ "node", "app.js"]