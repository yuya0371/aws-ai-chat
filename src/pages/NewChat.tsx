import ChatInput from "../components/ui/ChatInput.tsx";
import { useNavigate } from "react-router";
import { sampleConversations } from "../sampleData.ts";
import { createChatTitle } from "../utils.ts";

export default function NewChat() {
  const navigate = useNavigate();
  const sendMessage = (message: string, model: string) => {
    const conversationId = self.crypto.randomUUID();

    sampleConversations.push({
      id: conversationId,
      title: createChatTitle(message),
      messages: [
        {
          id: "message-${self.crypto.randomUUID()}",
          role: "user",
          content: message,
          timestamp: new Date(),
        },
        {
          id: "message-${self.crypto.randomUUID()}",
          role: "assistant",
          content: "これはサンプルの応答です。",
          timestamp: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    navigate(`/chat/${conversationId}`, {
      state: {
        message,
        model,
      },
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-x1 flex w-full flex-col gap-2">
        <h1 className="text-center text-3xl font-bold">test-user さん</h1>
        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  );
}
