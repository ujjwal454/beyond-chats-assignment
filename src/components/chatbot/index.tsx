import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DummyChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botReply = {
      text: "I'm a dummy bot! I don't understand much yet. 🤖",
      sender: "bot",
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="flex justify-center items-center  bg-gray-900 p-4">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>Chatbot</CardTitle>
        </CardHeader>
        <CardContent className="h-96 overflow-y-auto space-y-2 border-b pb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-700 text-white"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </CardContent>
        <div className="flex items-center gap-2 mt-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </Card>
    </div>
  );
};

export default DummyChatbot;
