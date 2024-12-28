# Stage 1: Build the React application
FROM node:22 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React application with nginx
FROM nginx:alpine

# Copy the build files from the previous stage to the nginx web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

