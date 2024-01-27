FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install --force

# Copy only necessary files
COPY . .

# Install OpenJDK
RUN apk update && \
    apk --no-cache add openjdk11-jre && \
    apk --no-cache add bash

# Download and set up the SonarScanner
RUN curl -L -o sonar-scanner-cli-4.6.2.2472-linux.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472-linux.zip && \
    unzip sonar-scanner-cli-4.6.2.2472-linux.zip && \
    rm sonar-scanner-cli-4.6.2.2472-linux.zip && \
    mv sonar-scanner-4.6.2.2472-linux sonar-scanner

ENV PATH=$PATH:/app/sonar-scanner/bin

# Replace these with your SonarQube server details and project information
ARG SONAR_HOST_URL=http://your-sonarqube-server:9000
ARG SONAR_PROJECT_KEY=social-media-app
ARG SONAR_LOGIN=sqp_4cdd977ff6722c5c61f41569ddbf49a3bb99bfc8

RUN /app/sonar-scanner/bin/sonar-scanner -Dsonar.host.url=$SONAR_HOST_URL -Dsonar.projectKey=$SONAR_PROJECT_KEY -Dsonar.login=$SONAR_LOGIN -Dsonar.sources=.

# Expose the port your app runs on (e.g., 6060)
EXPOSE 6060

# Define the command to run your app
CMD ["npm", "start"]
