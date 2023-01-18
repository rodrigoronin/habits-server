import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

const port = 20023;

app.register(fastifyCors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log(`🚀 Server running on port ${port} - http://localhost:${port}`);
  });
