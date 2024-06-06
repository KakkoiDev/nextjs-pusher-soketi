# NextJS + Pusher/Soketi

Near realtime chat app using Pusher/Soketi.

## Use with Pusher

Create a pusher account and create a new app: https://dashboard.pusher.com/

Create a `.env.local` file based on `.env.example` and fill in the values.

Uncomment the `// Pusher config` in `pusherClient.ts` and `pusherServer.ts`.

Run dev server: `npm run dev`

## Use with Soketi

Install and run Soketi: https://docs.soketi.app/getting-started/installation/cli-installation

⚠️ Soketi only works with Node up to version 18 at the moment. Use [NVM](https://github.com/nvm-sh/nvm) to switch versions if needed.

Run dev server: `npm run dev`
