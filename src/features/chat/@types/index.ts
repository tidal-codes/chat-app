import type { Message } from "@/features/message/@types";
import type { User } from "@/shared/@types";

export type ChatUser = {
    id: string;
    username: string;
    fullName: string;
    avatar: string;
    isOnline: boolean;
};
export type ChatPreview = {
    conversation_id: string;
    last_message: Message;
    contact: User
};

export interface ChatsStore {
    chats: Record<string, ChatPreview>;
    chatIds: string[];
    setChats: (chats: ChatPreview[]) => void;
    updateChat: (chatId: string, newChat: Partial<ChatPreview>) => void;
}