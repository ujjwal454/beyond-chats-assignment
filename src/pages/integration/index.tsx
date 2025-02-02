import confetti from "canvas-confetti";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DummyChatbot from "@/components/chatbot";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router";

function Integration() {
  const [showChatBot, setShowChatBot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chatBotIntegrated, setChatBotIntegrated] = useState(false);

  const navigate = useNavigate();

  const triggerFireWorks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const updateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setChatBotIntegrated(true);
      triggerFireWorks();
      toast.success("Chatbot integration detected");
    }, 2000);
  };

  const testIntegration = () => {
    updateLoading();
  };
  return (
    <div className="flex flex-col items-center min-h-screen p-6 dark:bg-gray-900">
      <Card className="w-full max-w-lg p-6">
        <CardHeader>
          <CardTitle>Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setShowChatBot(true)} className="w-full mb-4">
            Test Chatbot
          </Button>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Integration Instructions</h3>
            <p>
              Copy and paste the following code into the{" "}
              <code>&lt;head&gt;</code> section of your website:
            </p>
            <pre className="bg-gray-800 text-white p-2 rounded mt-2 overflow-x-auto mb-4">
              {`<script src="https://example.com/chatbot.js"></script>`}
            </pre>
            <Button
              className="w-full mb-4"
              onClick={() => toast.success("Instructions Sent")}
            >
              Email Instructions
            </Button>
            <Button className="w-full mb-4" onClick={testIntegration}>
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Test Integration"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      <Dialog open={showChatBot} onOpenChange={() => setShowChatBot(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chatbot preview</DialogTitle>
            <DialogDescription>
              <DummyChatbot />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={showChatBot} onOpenChange={() => setShowChatBot(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chatbot preview</DialogTitle>
            <DialogDescription>
              <DummyChatbot />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button
        className="fixed bottom-4 right-4 flex flex-col items-end"
        disabled={!chatBotIntegrated || isLoading}
        onClick={() => navigate("/test")}
      >
        View Chatbot In Your Site
      </Button>
    </div>
  );
}

export default Integration;
