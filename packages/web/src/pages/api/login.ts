import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  // NOTE: The content of request is the type multipart/form-data
  const data = await request.formData();

  // NOTE: You can access to the form data using request.formData

  await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.get("email"),
      password: data.get("password"),
    }),
  });

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
