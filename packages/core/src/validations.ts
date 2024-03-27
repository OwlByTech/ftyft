const loginSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        email: { type: "string", format: "email" },
        password: {
          type: "string",
          format: "password",
          minLength: 8,
          pattern: /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gm.toString(),
        },
      },
      required: ["email", "password"],
    },
  },
};
export { loginSchema };

const signUpSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        email: { type: "string", format: "email" },
        password: { type: "string", format: "password", minLength: 8 },
        username: { type: "string" },
        received_emails: { type: "boolean" },
      },
      required: ["email", "password", "username", "received_emails"],
    },
  },
};
export { signUpSchema };

const accountfindSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        email: { type: "string", format: "email" },
      },
      required: ["email"],
    },
  },
};
export { accountfindSchema };
