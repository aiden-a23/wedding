import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

  // Get next_cursor from query
  const { searchParams } = new URL(req.url);
  const next_cursor = searchParams.get('next_cursor');
  let url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=30`;
  if (next_cursor) {
    url += `&next_cursor=${next_cursor}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const data = await response.json();

  return Response.json({
    resources: data.resources,
    next_cursor: data.next_cursor || null,
  });
}
