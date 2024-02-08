import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  // NOTE: The content of request is the type multipart/form-data
  const data = await request.formData();

  // NOTE: You can access to the form data using request.formData

  await fetch(`${import.meta.env.API_ENDPOINT}/api/sign_up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
      recived_emails: data.get("recived_emails"),
    }),
  });

  return new Response(
    JSON.stringify({
      message: "Sing up!",
    }),
    { status: 200 }
  );
};
