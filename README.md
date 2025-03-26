# Flutter-Bun Template

A template project for creating a Flutter web application with a Bun server backend, containerized with Docker.

## Project Structure

- `/frontend`: Flutter web application with its own Dockerfile
- `/backend`: Bun server with its own Dockerfile
- `docker-compose.yml`: Configuration to build and run both services together

## Installation Instructions

### Prerequisites

#### Windows

1. Install Flutter:
   ```
   winget install -e --id Google.Flutter
   ```

2. Install Bun:
   ```
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```

3. Install Docker Desktop:
   ```
   winget install -e --id Docker.DockerDesktop
   ```

#### Linux

1. Install Flutter:
   ```bash
   sudo snap install flutter --classic
   ```

2. Install Bun:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. Install Docker and Docker Compose:
   ```bash
   sudo apt-get update
   sudo apt-get install docker.io docker-compose
   sudo systemctl enable --now docker
   sudo usermod -aG docker $USER
   ```

## Getting Started

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd flutter-bun-template
   ```

2. Build and run with Docker Compose:
   ```bash
   docker compose build && docker compose up -d
   ```
   ```bash
   docker compose down -v && docker compose build --no-cache && docker compose up -d
   ```

3. Access:
   - Flutter web app: http://localhost:8080
   - Bun server API: http://localhost:3000

## Development

- Frontend (Flutter): Navigate to the `/frontend` directory to develop the Flutter application
- Backend (Bun): Navigate to the `/backend` directory to develop the Bun server
- Currently we are targeting WEB but we can add support for mobile later 
   ```cd frontend && flutter create --platforms=android . && flutter create --platforms=ios .```
