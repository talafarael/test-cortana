import { verifyToken } from "./jwt";

export async function getUserIdFromRequest(request: Request): Promise<string | null> {
  try {
    const cookie = request.headers.get('cookie') || '';
    const match = cookie.match(/token=([^;]+)/);

    if (!match) {
      return null;
    }

    const token = match[1];
    const decoded = await verifyToken(token);

    return decoded.id as string || null;
  } catch {
    return null;
  }
}
