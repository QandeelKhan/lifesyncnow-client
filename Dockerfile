FROM node:19-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json /app/

# Install Node.js dependencies
RUN npm install

# Copy the React application code to the container
COPY . /app/

# Build the React application
RUN npm run build

# Expose the port on which the React application runs (default: 3000)
EXPOSE 3000

# Set the command to start the React application
CMD ["npm", "start"]
