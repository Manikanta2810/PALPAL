// Cloudflare R2 Client Sync Service

export async function syncToCloud(statePayload: unknown): Promise<{ ok: boolean; message?: string }> {
  try {
    const res = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(statePayload),
    });

    if (!res.ok) {
      const err = (await res.json().catch(() => ({}))) as { error?: string };
      return { ok: false, message: err.error || 'Cloud sync failed' };
    }

    return { ok: true };
  } catch (e: unknown) {
    const err = e instanceof Error ? e.message : 'Network error';
    return { ok: false, message: err };
  }
}

export async function loadFromCloud(handle: string): Promise<{ ok: boolean; data?: unknown; message?: string }> {
  try {
    const cleanHandle = handle.toLowerCase().replace(/[^a-z0-9_]/g, '');
    const res = await fetch(`/api/sync?u=${encodeURIComponent(cleanHandle)}`);

    if (!res.ok) {
      const err = (await res.json().catch(() => ({}))) as { message?: string };
      return { ok: false, message: err.message || 'Profile not found in cloud' };
    }

    const data = (await res.json()) as unknown;
    return { ok: true, data };
  } catch (e: unknown) {
    const err = e instanceof Error ? e.message : 'Network error';
    return { ok: false, message: err };
  }
}
