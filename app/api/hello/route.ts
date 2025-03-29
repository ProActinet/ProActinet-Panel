// import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = "edge";

export async function GET() {
  const apiUrl = "https://67a86a86203008941f69d661.mockapi.io/api/NXT_TEST";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
