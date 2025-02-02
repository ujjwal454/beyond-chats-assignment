import { useState } from "react";
import DummyChatbot from "@/components/chatbot";
import ChatIcon from "@/assets/icons/chat.svg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && <DummyChatbot />}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {isOpen ? <p>X</p> : <img src={ChatIcon} className="w-6 h-6" />}
      </button>
    </div>
  );
};

const ClientWebsite = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="absolute top-0  bg-slate-900">
        <p className="text-white text-sm p-2">
          Chatbot not working as intended?{" "}
          <a className="cursor-pointer underline">Share feedback</a>{" "}
        </p>
      </div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Client's Website</h1>
      <p className="text-lg">
        This is a sample website with a chatbot integration.
      </p>
      <Chatbot />
    </div>
  );
};

export default ClientWebsite;
