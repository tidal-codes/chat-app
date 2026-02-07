import type { ChatsStore } from "../@types";
import { create } from "zustand";



const useChatsStore = create<ChatsStore>((set) => ({
    chats: {},
    chatIds: [],
    setChats: (ChatPreviews) => set(() => {
        {
            const chatsRecord: Record<string, ChatsStore["chats"][string]> = {};
            const chatIds: string[] = [];
            ChatPreviews.forEach(preview => {
                chatsRecord[preview.conversation_id] = preview;
                chatIds.push(preview.conversation_id);
            });
            return { chats: chatsRecord, chatIds };
        }
    }),
    updateChat: (chatId, newChat) => set((state) => {
        const chat = state.chats[chatId];
        if (!chat) return state;

        return {
            chats: {
                ...state.chats,
                [chatId]: { ...chat, ...newChat },
            },
        };
    })
}));

export default useChatsStore;