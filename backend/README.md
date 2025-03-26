# Bun API Server with Elysia

This is the backend API server built with Bun and Elysia for the Flutter-Bun template.

## Features

- Fast HTTP server with Elysia framework
- Swagger documentation for API endpoints
- Type-safe endpoints

## Available Endpoints

- `GET /`: Root endpoint that confirms the server is running
- `GET /health`: Health check endpoint that returns server status and information
- `GET /swagger`: Swagger UI for API documentation

## Development

### Local Development

1. Make sure Bun is installed
2. Install dependencies:
   ```
   bun install
   ```
3. Run the development server:
   ```
   bun dev
   ```
   This will start the server with hot reloading.

### Production

In production, the server is run through Docker as defined in the Dockerfile at the root of this directory.

## Adding New Endpoints

To add a new endpoint, modify the `index.ts` file and use Elysia's fluent API:

```typescript
app.get('/your-new-endpoint', () => {
  return {
    // your response data
  };
}, {
  detail: {
    tags: ['YourTag'],
    summary: 'Endpoint description',
    description: 'Detailed description of what this endpoint does'
  },
  response: {
    200: t.Object({
      // Define your response type for Swagger documentation
      field1: t.String(),
      field2: t.Number()
    })
  }
});
```

## Swagger Documentation

The API documentation is available at [http://localhost:3000/swagger](http://localhost:3000/swagger) when the server is running.
