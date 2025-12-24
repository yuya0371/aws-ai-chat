import type { Message } from "../../types/chat";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMassage";
import { twMerge } from "tailwind-merge";

interface MessageListProps {
  messages: Message[];
  className?: string;
}

export default function MessageList({ messages, className }: MessageListProps) {
  return (
    <div
      className={twMerge(
        "flex-1 space-y-4 overflow-y-auto p-4 px-6",
        className,
      )}
    >
      {messages.map((message) =>
        message.role === "assistant" ? (
          <AIMessage key={message.id} message={message} />
        ) : (
          <UserMessage key={message.id} message={message} />
        ),
      )}
    </div>
  );
}
