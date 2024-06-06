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
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ message }),
    });

    setMessage("");
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </div>
      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
