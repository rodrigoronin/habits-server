import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

const port = 20023;

app.register(fastifyCors);
app.register(appRoutes);

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log(`🚀 Server running on port ${port} - http://localhost:${port}`);
  });
