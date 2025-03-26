# Bun API Server

This is the backend API server built with Bun for the Flutter-Bun template.

## Available Endpoints

- `GET /`: Root endpoint that confirms the server is running
- `GET /health`: Health check endpoint that returns server status and information

## Development

### Local Development

1. Make sure Bun is installed
2. Run the development server:
   ```
   bun dev
   ```
   This will start the server with hot reloading.

### Production

In production, the server is run through Docker as defined in the Dockerfile at the root of this directory.

## Adding New Endpoints

To add a new endpoint, modify the `index.ts` file and add a new route condition:

```typescript
if (url.pathname === "/your-new-endpoint") {
  return Response.json({
    // your response data
  });
}
```
