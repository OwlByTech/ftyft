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

server.post("/api/sign-up", async (request, reply) => {
  const { email, password, username, retry_password, received_emails } =
    request.body as any;
  console.log(received_emails);
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      username: username,
      received_emails: received_emails == "true",
      
    },
  });
});

server.post("/api/accountfind", async (request, reply) => {
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

server.listen({ host: "0.0.0.0", port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
