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
    }
}))

export default useMessageStore