import fastify from "fastify";

import { PrismaClient } from "@prisma/client";
import { request } from "http";
const prisma = new PrismaClient();
const server = fastify();

await prisma.$connect();

// api user
server.post("/api/login", async (request, reply) => {
  const { email, password } = request.body as any;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  });

  if (user) {
    console.log("User find", user);
  } else {
    console.log("User don't exist");
    console.log(user);
    return user;
  }

  // @ts-ignore
  console.log(request.body.email, request.body.password);
});

server.post("/api/sing", async (request, reply) => {
  const { email, password, username, recived_emails } = request.body as any;
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      username: username,
      recived_emails: recived_emails,
    },
  });

  console.log(user);
  return user;
});

server.post("api/acountfind", async (request, reply) => {
  const { email } = request.body as any;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  console.log(user);
});

// standar

server.get("/api/version", async (request, reply) => {
  return { version: "v0.0.1" };
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
