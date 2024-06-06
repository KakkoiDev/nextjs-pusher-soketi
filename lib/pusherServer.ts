import Pusher from "pusher";

// Pusher config
// export const pusherServer = new Pusher({
//   appId: process.env.PUSHER_APP_ID ?? "",
//   key: process.env.NEXT_PUBLIC_PUSHER_KEY ?? "",
//   secret: process.env.PUSHER_SECRET ?? "",
//   cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "",
//   useTLS: true,
// });

// Soketi config
export const pusherServer = new Pusher({
  appId: "app-id",
  key: "app-key",
  secret: "app-secret",
  host: "127.0.0.1",
  port: "6001",
  useTLS: false,
});
