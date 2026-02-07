import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMessages, sendMessage } from "../api";
import type { Message, SendMessageParams } from "../@types";

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
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (messageParams: SendMessageParams) =>
            sendMessage(messageParams),

        onMutate: async (messageParams) => {
            const { conversation_id } = messageParams

            // همه‌ی درخواست‌های قبلی رو متوقف کن تا race condition نشه
            await queryClient.cancelQueries({ queryKey: ["conversation", conversation_id] })

            // داده قبلی
            const previousMessages = queryClient.getQueryData(["conversation", conversation_id])

            // optimistic update
            queryClient.setQueryData(
                ["conversation", conversation_id],
                (old: any[] = []) => [
                    ...old,
                    {
                        id: crypto.randomUUID(),
                        conversation_id: conversation_id,
                        sender_id: messageParams.sender_id,
                        text: messageParams.text,
                        read: false,
                        created_at: new Date().toISOString(), // صحیح‌ترین حالت
                        optimistic: true,
                    },
                ]
            )

            return { previousMessages }
        },

        // اگر خطا خورد، همه‌چیز برگرده
        onError: (_err, messageParams, context) => {
            queryClient.setQueryData(
                ["conversation", messageParams.conversation_id],
                context?.previousMessages
            )
        },

        // بعد از موفقیت، داده رو sync کن با دیتابیس
        onSuccess: (data, messageParams) => {
            queryClient.setQueryData(
                ["conversation", messageParams.conversation_id],
                (old: any[] = []) => old.map((msg) =>
                    msg.optimistic ? data : msg
                )
            )
        },

        // و در نهایت، fetch دوباره بزنه تا مطمئن بشه
        onSettled: (_data, _error, messageParams) => {
            queryClient.invalidateQueries({
                queryKey: [
                    "conversation",
                    messageParams.conversation_id,
                ]
            })
        },
    })
}