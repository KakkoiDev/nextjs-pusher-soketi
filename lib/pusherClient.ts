import Pusher from "pusher-js";

// Pusher config
// export const pusherClient = new Pusher(
//   process.env.NEXT_PUBLIC_PUSHER_KEY ?? "",
//   {
//     cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "",
//   }
// );

// Soketi config
export const pusherClient = new Pusher("app-key", {
  wsHost: "127.0.0.1",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
  cluster: "", // required by Pusher SDK
});
