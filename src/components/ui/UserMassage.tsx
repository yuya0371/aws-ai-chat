import type { Message } from "../../types/chat";

interface AIMessageProps {
  message: Message;
}

export default function AIMessage({ message }: AIMessageProps) {
  return (
    <div className="flex justify-end">
      <div className="max-w-3/4 rounded-lg bg-emerald-600 px-4 py-2 text-white">
        {message.content}
      </div>
    </div>
  );
}
