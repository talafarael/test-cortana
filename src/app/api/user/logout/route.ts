export async function GET() {
  return new Response("Cookie removed", {
    status: 200,
    headers: {
      "Set-Cookie": "token=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict",
    },
  });
}
