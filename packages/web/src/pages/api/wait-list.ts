import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const data = await request.formData();
  await fetch('http://localhost:3000/api/wait-list', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.get("email")
    })
  });

  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};