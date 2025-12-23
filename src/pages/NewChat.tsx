import ChatInput from "../components/ui/ChatInput.tsx";
import { useNavigate } from "react-router";

export default function NewChat() {
  const navigate = useNavigate();
  const sendMessage = (message: string, model: string) => {
    const conversationId = self.crypto.randomUUID();
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
