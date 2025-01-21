# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
