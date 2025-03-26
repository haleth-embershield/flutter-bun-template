FROM debian:bookworm-slim as builder

# Install required packages
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    xz-utils \
    zip \
    libglu1-mesa \
    && rm -rf /var/lib/apt/lists/*

# Install Flutter
RUN git clone https://github.com/flutter/flutter.git /flutter
ENV PATH="/flutter/bin:${PATH}"

# Set Flutter channel to stable and update
RUN flutter channel stable
RUN flutter upgrade
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

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 