import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../api";
import type { Message } from "../@types";

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