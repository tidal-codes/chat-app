import { useQuery } from "@tanstack/react-query";
import { getUserConversations } from "../api";
import type { ChatPreview } from "../@types";

export function useGetConversations() {
    const { data, error, isLoading } = useQuery<ChatPreview[]>({
        queryKey: ["user-chats"],
        queryFn: () => getUserConversations()
    })

    return {
        data,
        error,
        isLoading
    }
}