"use client";

import { pusherClient } from "@/lib/pusherClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    pusherClient.subscribe("channel");
    pusherClient.bind("message", (data: { message: string }) => {
      setMessages((prev) => [...prev, data.message]);
    });

    return () => {
      pusherClient.unsubscribe("channel");
      pusherClient.unbind("message");
    };
  }, []);

  const handleSubmit = async () => {
    await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    setMessage("");
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-5xl font-bold">Chat</h1>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white rounded-md py-2 px-4"
          >
            Send
          </button>
        </div>
      </div>
      <ul className="flex flex-col">
        {messages.map((message) => (
          <li key={message} className="text-gray-700">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
}
