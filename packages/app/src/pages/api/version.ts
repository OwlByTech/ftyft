import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {

  // NOTE: Connection to core api

  let data;
  try {
    const res = await fetch(`${import.meta.env.API_ENDPOINT}/api/version`);
    data = await res.json();
  } catch (e) {
    return new Response("{}", {status: 400});
  }

  return new Response(
    JSON.stringify({
      version: data.version
    }),
    { status: 200 }
  );
};