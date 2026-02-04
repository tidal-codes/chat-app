import { useEffect } from "react";
import { useMessages } from "./Queries";
import useMessageStore from "../store/useMessageStore";

export default function useSetMessages(chatId: string) {
    const { data } = useMessages(chatId);
    const setMessages = useMessageStore(state => state.setMessages);
    useEffect(() => {
        if (data) {
            setMessages(data)
        }
    }, [data])
}