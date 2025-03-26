FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json bun.lockb* ./
RUN bun install

# Copy rest of application
COPY . .

# Expose the port Bun runs on
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"] 