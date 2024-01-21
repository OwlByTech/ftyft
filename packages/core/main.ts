import fastify from "fastify";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const server = fastify();

server.post('/api/user', async (request, reply) => {
  const { name, email } = request.body as any;
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  })

  return user;
});

server.get("/api/users", async (request, reply) => {
  return await prisma.user.findMany();
});

server.get("/", async (request, reply) => {
  reply.type("text/html");
  reply.send("<h1> ftyft </h1>");
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
