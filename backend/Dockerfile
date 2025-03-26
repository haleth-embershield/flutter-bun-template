FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json/bun.lockb
COPY package.json tsconfig.json bun.lockb* ./

# Install all dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Expose the port Elysia runs on
EXPOSE 3000

# Start the application directly with Bun rather than using npm scripts
CMD ["bun", "index.ts"] 