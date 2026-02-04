export type ChatUser = {
    id: string;
    username: string;
    fullName: string;
    avatar: string;
    isOnline: boolean;
};

export type LastMessage = {
    id: string;
    text: string;
    sentByMe: boolean;
    createdAt: string; 
};

export type ChatPreview = {
    chatId: string;
    user: ChatUser;
    lastMessage: LastMessage;
    unreadCount: number;
};

export interface ChatsStore {
    chats: Record<string, ChatPreview>;
    chatIds: string[];
    setChats: (chats: ChatPreview[]) => void;
}