import { useParams } from "react-router";

export default function ChatConversation() {
  const { conversationId } = useParams();

  return (
    <div>
      <h1>Chat Conversation: {conversationId}</h1>
    </div>
  );
}
