import { useMutation, useQuery } from "@tanstack/react-query";
import { getMessages, sendMessage } from "../api";
import type { Message, SendMessageParams } from "../@types";
import useMessageStore from "../store/useMessageStore";
import useChatsStore from "@/features/chat/store/chats";

export function useMessages(chatId: string) {
    const { data, error, isLoading } = useQuery<Message[]>({
        queryKey: ["conversation", chatId],
        queryFn: () => getMessages(chatId)
    })

    return {
        data,
        error,
        isLoading
    }
}

export function useSendMessage() {
    const addMessage = useMessageStore(state => state.addMessage);
    const removeMessage = useMessageStore(state => state.removeMessage);
    const updateMessage = useMessageStore(state => state.updateMessage);
    const updateChat = useChatsStore(state => state.updateChat);

    return useMutation({
        mutationFn: (messageParams: SendMessageParams) =>
            sendMessage(messageParams),

        onMutate: async (messageParams) => {
            const tempId = crypto.randomUUID();
            const message: Message = {
                id: tempId,
                conversation_id: messageParams.conversation_id,
                sender_id: messageParams.sender_id,
                text: messageParams.text,
                read: false,
                status: "SENDING",
                created_at: new Date().toISOString(),
            }
            addMessage(message);
            updateChat(messageParams.conversation_id, { last_message: message })
            return { tempId };
        },
        onSuccess: (_data, _variables, context) => {
            if (context?.tempId) {
                updateMessage(context.tempId, { status: "SENT" })
            }
        },

        onError: (_err, _messageParams, context) => {
            if (context?.tempId) {
                updateMessage(context.tempId, { status: "FAILED" })
            }
        },
    })
}