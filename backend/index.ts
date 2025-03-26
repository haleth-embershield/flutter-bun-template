import { Elysia, t } from 'elysia';
import { swagger } from '@elysiajs/swagger';

// Create a new Elysia app
const app = new Elysia()
  .use(swagger({
    documentation: {
      info: {
        title: 'Bun API Server',
        version: '1.0.0',
        description: 'API server for the Flutter-Bun template',
      },
      tags: [
        { name: 'General', description: 'General endpoints' },
      ],
    },
  }))
  .get('/', () => {
    return 'Welcome to the Bun server API with Elysia! It\'s working correctly.';
  }, {
    detail: {
      tags: ['General'],
      summary: 'Root endpoint to confirm server is running',
      description: 'Returns a welcome message to confirm the server is operational'
    }
  })
  .get('/health', () => {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      server: 'Bun + Elysia',
      version: Bun.version
    };
  }, {
    detail: {
      tags: ['General'],
      summary: 'Health check endpoint',
      description: 'Returns server status and information'
    },
    response: {
      200: t.Object({
        status: t.String(),
        timestamp: t.String(),
        server: t.String(),
        version: t.String()
      })
    }
  })
  .listen(3000);

console.log(`Elysia server is running at ${app.server?.hostname}:${app.server?.port}`);
console.log(`Swagger documentation available at http://localhost:3000/swagger`);