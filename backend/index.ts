import { serve } from "bun";

const server = serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    // Root route handler
    if (url.pathname === "/") {
      return new Response("Welcome to the Bun server API! It's working correctly.", {
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
    
    // Health check endpoint
    if (url.pathname === "/health") {
      return Response.json({
        status: "ok",
        timestamp: new Date().toISOString(),
        server: "Bun",
        version: Bun.version
      });
    }
    
    // Default 404 response for unhandled routes
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Bun server is running at http://localhost:${server.port}`);