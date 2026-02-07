import { create } from "zustand";
import type { Message, MessageStore } from "../@types";

const useMessageStore = create<MessageStore>((set) => ({
    messageIds: [],
    messagesById: {},
    setMessages: (messages) => {
        const messagesById: Record<string, Message> = {};
        const messageIds: string[] = [];

        messages.forEach(message => {
            messagesById[message.id] = message;
            messageIds.push(message.id);
        })

        return set({ messageIds, messagesById })
    },
    addMessage: (message) => set((state) => {
        if (state.messagesById[message.id]) {
            return state;
        }

        return {
            messageIds: [...state.messageIds, message.id],
            messagesById: {
                ...state.messagesById,
                [message.id]: message,
            },
        };
    }),
    removeMessage: (messageId) => set((state) => {
        if (!state.messagesById[messageId]) {
            return state;
        }

        const { [messageId]: _removed, ...restMessages } = state.messagesById;

        return {
            messageIds: state.messageIds.filter((id) => id !== messageId),
            messagesById: restMessages,
        };
    }),
    updateMessage: (messageId, newMessage) => set((state) => {
        const message = state.messagesById[messageId];
        if (!message) return state;

        return {
            messagesById: {
                ...state.messagesById,
                [messageId]: { ...message, ...newMessage },
            },
        };
    })
}))

export default useMessageStore