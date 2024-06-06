import { pusherServer } from "@/lib/pusherServer";

export async function POST(req: Request) {
  const message = await req.json();

  pusherServer.trigger("channel", "message", message);

  return new Response("ok", { status: 200 });
}
