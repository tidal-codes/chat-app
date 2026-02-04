export interface Message {
    id: string,
    conversation_id: string,
    sender_id: string,
    content: string,
    created_at: string
}

export interface MessageStore {
    messageIds: string[],
    messagesById: Record<string, Message>,
    setMessages: (messages: Message[]) => void 
}