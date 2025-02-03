# Step 1: Use the official Node.js image from Docker Hub
FROM node:16.20.2

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Install nodemon globally (for development)
RUN npm install -g nodemon

# Step 6: Copy the rest of the application files to the container
COPY . .

# Step 7: Expose the port your app will run on
EXPOSE 5000

# Step 8: Use nodemon to start your app in development mode
CMD ["nodemon", "src/app.js"]
