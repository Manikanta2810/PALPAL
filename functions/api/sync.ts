// Cloudflare Pages Function: /api/sync
// Backed directly by Cloudflare R2 bucket binding: BORINGBROS_BUCKET

interface Env {
  BORINGBROS_BUCKET: {
    get: (key: string) => Promise<{ body: ReadableStream; text: () => Promise<string> } | null>;
    put: (key: string, value: string | ArrayBuffer | ReadableStream, options?: { httpMetadata?: { contentType?: string } }) => Promise<unknown>;
    delete: (key: string) => Promise<void>;
  };
}

interface Context {
  request: Request;
  env: Env;
}

// GET /api/sync?u=username -> fetch user profile & progress from R2
export async function onRequestGet(context: Context): Promise<Response> {
  try {
    const url = new URL(context.request.url);
    const userHandle = url.searchParams.get('u');

    if (!userHandle) {
      return new Response(JSON.stringify({ error: 'Username query parameter "u" is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const cleanHandle = userHandle.toLowerCase().replace(/[^a-z0-9_]/g, '');
    const r2Key = `users/${cleanHandle}.json`;

    if (!context.env.BORINGBROS_BUCKET) {
      return new Response(JSON.stringify({ error: 'R2 bucket not bound' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const object = await context.env.BORINGBROS_BUCKET.get(r2Key);
    if (!object) {
      return new Response(JSON.stringify({ found: false, message: 'No cloud record found for this handle' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await object.text();
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: 'Failed to read from R2', details: errorMsg }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// POST /api/sync -> save/sync user profile & progress into R2
export async function onRequestPost(context: Context): Promise<Response> {
  try {
    const body = await context.request.json() as Record<string, unknown>;
    const user = (body.user as Record<string, unknown> | undefined)?.u || body.u;

    if (!user || typeof user !== 'string') {
      return new Response(JSON.stringify({ error: 'Missing username in payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const cleanHandle = user.toLowerCase().replace(/[^a-z0-9_]/g, '');
    const r2Key = `users/${cleanHandle}.json`;

    if (!context.env.BORINGBROS_BUCKET) {
      return new Response(JSON.stringify({ error: 'R2 bucket not bound' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const payload = JSON.stringify(
      {
        ...body,
        syncedAt: new Date().toISOString(),
      },
      null,
      2
    );

    await context.env.BORINGBROS_BUCKET.put(r2Key, payload, {
      httpMetadata: { contentType: 'application/json' },
    });

    return new Response(
      JSON.stringify({
        ok: true,
        handle: cleanHandle,
        key: r2Key,
        syncedAt: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: 'Failed to write to R2', details: errorMsg }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
