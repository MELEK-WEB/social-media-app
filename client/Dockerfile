FROM node:16-alpine

# Create a non-root user
RUN addgroup app && adduser -S -G app app

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Change ownership of the working directory to the non-root user
RUN chown -R app:app .

# Switch to the non-root user
USER app

# Install dependencies
RUN npm install --force

# Copy only necessary files
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
 
