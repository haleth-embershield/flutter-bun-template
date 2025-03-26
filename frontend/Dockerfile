# Build stage
FROM ghcr.io/cirruslabs/flutter:stable AS builder

# Enable web
RUN flutter config --enable-web

# Set working directory
WORKDIR /app

# Copy flutter project
COPY . .

# Get dependencies
RUN flutter pub get

# Build for web
RUN flutter build web --release

# Production stage
FROM nginx:alpine

# Copy build files from builder stage
COPY --from=builder /app/build/web /usr/share/nginx/html

# Optional: Copy custom nginx config if you have one
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]