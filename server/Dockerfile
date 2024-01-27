FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install --force

# Copy only necessary files
COPY . .

# Create a volume for the assets folder
VOLUME /app/public/assets

# Expose the port your app runs on (e.g., 6060)
EXPOSE 6060

# Define the command to run your app
CMD ["npm", "start"]
