import { useQuery } from "@tanstack/react-query";
import { getUserChats } from "../api";
import type { ChatPreview } from "../@types";

export function useGetChats() {
    const { data, error, isLoading } = useQuery<ChatPreview[]>({
        queryKey: ['user-chats'],
        queryFn: () => getUserChats(),
    })

    return {
        data,
        error,
        isLoading
    };
}