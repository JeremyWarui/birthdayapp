# Step 1: Build the React app
FROM node:20 AS build

# Set working directory for building the frontend
WORKDIR /app

# Copy the package.json and package-lock.json of the client
COPY client/package.json client/package-lock.json ./client/

# Install dependencies for the client
RUN npm install --prefix ./client

# Copy the rest of the client code
COPY client ./client/

# Build the React app using Vite
RUN npm run build --prefix ./client

# Step 2: Set up the Express server to serve the frontend
FROM node:20

# Set the working directory for the backend (inside the server folder)
WORKDIR /app/server

# Copy the server's package.json and package-lock.json
COPY server/package.json server/package-lock.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the backend code
COPY server ./

# Copy the React app build output from the build stage into the final image
COPY --from=build /app/client/dist /app/client/dist

# Ensure the .env file is also copied (useful for local development)
# COPY server/.env ./server/.env

# Expose the necessary port for the backend
EXPOSE 5001

# Set the working directory to /app/server
WORKDIR /app/server

# Start the Express server (ensure we're in the server directory)
CMD ["node", "index.js"]
