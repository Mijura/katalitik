FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install ts-node, TypeScript and tsconfig-paths globally
RUN npm install -g ts-node typescript tsconfig-paths

# Copy app source
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Start the app
CMD ["ts-node", "-r", "tsconfig-paths/register", "src/infrastructure/http/index.ts"]
