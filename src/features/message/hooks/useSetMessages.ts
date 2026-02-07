import { useEffect } from "react";
import { useMessages } from "./Queries";
import useMessageStore from "../store/useMessageStore";
import { listenToMessages } from "../api";
import type { Message } from "../@types";
import supabase from "@/core/supabase";
import useAuth from "@/features/auth/hooks/useAuth";

export default function useSetMessages(chatId: string) {
    const { data } = useMessages(chatId);
    const auth = useAuth();
    const setMessages = useMessageStore(state => state.setMessages);
    const addMessage = useMessageStore(state => state.addMessage);

    useEffect(() => {
        if (data) {
            setMessages(data)
        }
    }, [data, setMessages])

    useEffect(() => {
        const channel = listenToMessages((payload) => {
            if (payload.eventType !== "INSERT") return;
            const newMessage = payload.new as Message;
            if (newMessage.conversation_id !== chatId || newMessage.sender_id === auth.user!.id) return;
            addMessage(newMessage);
        });

        return () => {
            supabase.removeChannel(channel);
        }
    }, [addMessage, chatId])
}