import type { ChatsStore } from "../@types";
import { create } from "zustand";



const useChatsStore = create<ChatsStore>((set) => ({
    chats: {},
    chatIds: [],
    setChats: (chats) => set(() => {
        {
            const chatsRecord: Record<string, ChatsStore["chats"][string]> = {};
            const chatIds: string[] = [];
            chats.forEach(chat => {
                chatsRecord[chat.chatId] = chat;
                chatIds.push(chat.chatId);
            });
            return { chats: chatsRecord, chatIds };
        }
    }),
}));

export default useChatsStore;