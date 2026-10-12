// Cloudflare Pages Function: /api/health

export async function onRequestGet(): Promise<Response> {
  return new Response(
    JSON.stringify({
      status: 'ok',
      service: 'BoringBroLabs Cloud Edge',
      storage: 'Cloudflare R2',
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
