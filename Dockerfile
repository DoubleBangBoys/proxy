FROM node:9.4

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 4000

# RUN npm install -g concurrently
# Copy source code to image
COPY . .

# Install dependencies
RUN npm install

# Build app and start server from script
# CMD [ "npm", "server" ]
CMD ["/usr/src/app/run"]