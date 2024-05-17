import Fastify from "fastify";
import FastifyIO from "fastify-socket.io";
import FastifyStatic from "@fastify/static";
import fastifyCors from "@fastify/cors";
import getFakeName from "./fake-name.js";
import { resolve } from "path";

import('@babel/register');

const server = Fastify({logger: process.env.NODE_ENV === 'dev'});

server.register(fastifyCors, { origin: process.env.ORIGINS});

server.register(FastifyIO, {
  transports: ["websocket", "polling"],
  cors: {origin: process.env.ORIGINS}
});

server.register(FastifyStatic, {root: resolve("frontend/dist")});


server.listen({port: process.env.PORT, host: process.env.HOST}, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  
  server.io.on("connection", async socket => {
    
    server.log.info(`Client connected: ${socket.id}`);
    
    const from = await getFakeName(); // Get a fake name for the user
    socket.on("message", body => {
      socket.broadcast.emit("message", {
        body, 
        from
      });
    });

  });
});