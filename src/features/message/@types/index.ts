export interface Message {
    id: string,
    conversation_id: string,
    sender_id: string,
    text: string,
    read: boolean,
    created_at: string
}

export interface MessageStore {
    messageIds: string[],
    messagesById: Record<string, Message>,
    setMessages: (messages: Message[]) => void,
    addMessage: (message: Message) => void
    removeMessage: (messageId: string) => void
}

export interface SendMessageParams {
    conversation_id: string;
    sender_id: string;
    text: string
} 
