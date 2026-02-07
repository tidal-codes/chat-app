export interface Message {
    id: string,
    conversation_id: string,
    sender_id: string,
    text: string,
    read: boolean,
    status: MessageStatus,
    created_at: string
}
export type MessageStatus = "SENDING" | "SENT" | "FAILED"
export interface MessageStore {
    messageIds: string[],
    messagesById: Record<string, Message>,
    setMessages: (messages: Message[]) => void,
    addMessage: (message: Message) => void
    removeMessage: (messageId: string) => void
    updateMessage: (messageId: string, newMessage: Partial<Message>) => void
}

export interface SendMessageParams {
    conversation_id: string;
    sender_id: string;
    text: string
} 
